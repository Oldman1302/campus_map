import {useEffect, useState, useRef, useCallback} from "react";
import {useMap} from "react-leaflet";
import "./SearchMarker.css"
import {fetchRoute} from "../../../services/server/routeAPI";
import NavigationBuilder from "../NavigationBuilder/NavigationBuilder";
import NavigationInfo from "../../Buttons/NavigationInfo/NavigationInfo";

export default function SearchMarker({
                                         markers = [],
                                         isLoading = false,
                                         routeColor,
                                         isNavigating = false,
                                         onNavigationStart,
                                         onNavigationStop,
                                         navigationDataToMarker = null,
                                         buildRoute,
                                         selectedStartPoint = null,
                                         onStartPointSelect
}) {
    const map = useMap();
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [searchWidth, setSearchWidth] = useState('auto');
    const inputRef = useRef(null);
    const resultsRef = useRef(null);
    const wrapperRef = useRef(null);
    const [navigationData, setNavigationData] = useState(null);
    const leftTimeRef = useRef(0);
    const leftDistanceRef = useRef(0);

    // Calculate available width for search bar
    useEffect(() => {
        const calculateWidth = () => {
            const screenWidth = window.innerWidth;
            const rightButtonsWidth = 44 + 20; // Button width (44px) + right margin (20px)
            const leftMargin = 20; // Left margin for safety
            const availableWidth = screenWidth - (rightButtonsWidth + leftMargin) - 40; // -40 for extra padding

            if (screenWidth <= 768) {
                // Mobile: use percentage but ensure it doesn't overlap with buttons
                setSearchWidth(`calc(100% - ${rightButtonsWidth + leftMargin + 70}px)`);
            } else {
                // Desktop: fixed max width but responsive
                const calculatedWidth = Math.min(availableWidth, 500);
                setSearchWidth(`${calculatedWidth}px`);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is outside the search wrapper
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        // Add event listener when dropdown is open
        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isSearchOpen]);

    // Prevent scroll events from reaching the map
    useEffect(() => {
        const resultsElement = resultsRef.current;

        if (resultsElement) {
            const preventScrollPropagation = (e) => {
                e.stopPropagation();
            };

            // Prevent wheel/scroll events on desktop
            resultsElement.addEventListener('wheel', preventScrollPropagation, { passive: false });

            // Prevent touch events on mobile
            resultsElement.addEventListener('touchstart', preventScrollPropagation);
            resultsElement.addEventListener('touchmove', preventScrollPropagation);
            resultsElement.addEventListener('touchend', preventScrollPropagation);

            return () => {
                resultsElement.removeEventListener('wheel', preventScrollPropagation);
                resultsElement.removeEventListener('touchstart', preventScrollPropagation);
                resultsElement.removeEventListener('touchmove', preventScrollPropagation);
                resultsElement.removeEventListener('touchend', preventScrollPropagation);
            };
        }
    }, [isSearchOpen, searchResults]);

    // Filter markers based on search input
    useEffect(() => {
        if (!searchInput.trim()) {
            setSearchResults(markers);
            setSelectedIndex(-1);
            return;
        }

        const input = searchInput.toLowerCase();
        const filtered = markers.filter(marker =>
            marker.name?.toLowerCase().includes(input) ||
            marker.type?.toLowerCase().includes(input)
        );
        setSearchResults(filtered);
        setSelectedIndex(-1);
    }, [searchInput, markers]);

    // Clear navigationData, when navigation is stopped from outside (button Stop)
    useEffect(() => {
        if (!isNavigating && navigationData) {
            setNavigationData(null);
            leftTimeRef.current = 0;
            leftDistanceRef.current = 0;
        }
    }, [isNavigating, navigationData]);

    // Handle navigation data from external source
    useEffect(() => {
        if (navigationDataToMarker) {
            setNavigationData(navigationDataToMarker);
            if (onNavigationStart) {
                onNavigationStart();
            }
        }
    }, [navigationDataToMarker, onNavigationStart]);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (!searchResults.length) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < searchResults.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && searchResults[selectedIndex]) {
                    handleSelectMarker(searchResults[selectedIndex]);
                } else if (searchResults[0]) {
                    handleSelectMarker(searchResults[0]);
                }
                break;
            case 'Escape':
                setIsSearchOpen(false);
                inputRef.current?.blur();
                break;
            default:
                break;
        }
    };

    // Handle marker selection - fly to marker
    const handleSelectMarker = (marker) => {
        const [lat, lng] = marker.coordinates;

        // Fly to marker location
        map.flyTo([lat, lng], 18, {
            duration: 1.5,
            animate: true
        });

        // Clear search
        setSearchInput(marker.name);
        setSearchResults([]);
        setIsSearchOpen(false);

        console.log('Selected marker:', marker.name, marker.type);
    };

    // Handle start point selection
    const handleSelectStartPoint = (e, marker) => {
        e.stopPropagation();

        // If the same marker is selected, deselect it
        if (selectedStartPoint?.name === marker.name) {
            if (onStartPointSelect) {
                onStartPointSelect(null);
            }
        } else {
            if (onStartPointSelect) {
                onStartPointSelect(marker);
            }
        }
    };

    // Handle navigation update from NavigationBuilder
    const handleNavigationUpdate = useCallback ((stats) => {
        leftTimeRef.current = stats.leftTime || 0;
        leftDistanceRef.current = stats.leftDistance || 0;
    }, []);

    // Handle navigation events from NavigationBuilder
    const handleNavigationEvent = async (result) => {
        if (result.completed) {
            alert(`🎉 Destination reached!\nDistance: ${result.distance}m\nTime: ${result.time}sec`);
            setNavigationData(null);
            leftTimeRef.current = 0;
            leftDistanceRef.current = 0;
            if (onNavigationStop) {
                onNavigationStop();
            }
        }

        if (result.deviated) {
            alert(`Deviation detected: ${result.deviationDistance.toFixed(1)}m. Recalculating...`);
            // Recalculate route from current position
            await handleRecalculateRoute(result.currentPosition);
        }
    };

    // Recalculate route when user deviates
    const handleRecalculateRoute = async (currentPosition) => {
        if (!navigationData?.destination) return;

        try {
            const from = `${currentPosition[0].toFixed(6)}, ${currentPosition[1].toFixed(6)}`;
            const route = await fetchRoute(from, navigationData.destination.name, "time");

            setNavigationData({
                path: route.path,
                distance: route.distance,
                time: route.time,
                strategy: route.strategy,
                destination: navigationData.destination,
                startPoint: navigationData.startPoint,
                distances: route.distances || [],
                times: route.times || []
            });

            console.log('Route recalculated successfully');
        } catch (error) {
            console.error('Error recalculating route:', error);
            alert(`Failed to recalculate route: ${error.message}`);
        }
    };

    // Placeholder for navigation function
    const handleBuildRoute = async (marker) => {
        setIsSearchOpen(false);
        if (buildRoute) {
            buildRoute(selectedStartPoint, marker);
        }
    };

    return (
        <div className="search-container">
            {!isNavigating && <div className="search-wrapper" style={{width: searchWidth}} ref={wrapperRef}>
                <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onFocus={() => setIsSearchOpen(true)}
                        onKeyDown={handleKeyDown}
                    />
                    {searchInput && (
                        <button
                            className="search-clear"
                            onClick={() => {
                                setSearchInput('');
                                setSearchResults(markers);
                                inputRef.current?.focus();
                            }}
                        >
                            ✕
                        </button>
                    )}
                </div>

                {isSearchOpen && (
                    <div
                        className="search-results"
                        ref={resultsRef}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        {isLoading ? (
                            <div className="search-loading">Loading markers...</div>
                        ) : searchResults.length === 0 ? (
                            <div className="search-no-results">
                                {searchInput ? `No results found for "${searchInput}"` : 'Start typing to search...'}
                            </div>
                        ) : (
                            <>
                                {/* Results list */}
                                {searchResults.map((marker, index) => (
                                    <div
                                        key={marker.id || index}
                                        className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        onClick={() => handleSelectMarker(marker)}
                                    >
                                        <div className="result-info">
                                            <div className="result-name">{marker.name}</div>
                                            <div
                                                className="result-type">{marker.type?.replace('_', ' ') || 'Location'}</div>
                                        </div>
                                        {/* Choose the start marker */}
                                        <button
                                            className={`result-start-btn ${selectedStartPoint?.name === marker.name ? 'active' : ''}`}
                                            onClick={(e) => handleSelectStartPoint(e, marker)}
                                            title={selectedStartPoint?.name === marker.name ? "Clear start point" : "Start navigation from here"}
                                        >
                                            🚩
                                        </button>

                                        {/* Build the navigation to the marker button */}
                                        <button
                                            className="result-route-btn"
                                            onClick={async (e) => {
                                                e.stopPropagation();
                                                await handleBuildRoute(marker);
                                            }}
                                            title="Build route to this location"
                                        >
                                            🧭
                                        </button>
                                    </div>
                                ))}

                                {/* Results counter - at the bottom */}
                                <div className="results-footer">
                                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Selected start point indicator */}
                {selectedStartPoint && (
                    <div className="start-point-indicator">
                        <span>📍 From: {selectedStartPoint.name}</span>
                        <button onClick={() => onStartPointSelect(null)} title="Clear start point">
                            ✕
                        </button>
                    </div>
                )}
            </div>}

            {isNavigating && navigationData && (
                <>
                    <NavigationInfo
                        timeRef={leftTimeRef}
                        distanceRef={leftDistanceRef}
                    />
                    <NavigationBuilder
                        routeData={navigationData}
                        markers={markers}
                        isActive={isNavigating}
                        onRouteComplete={handleNavigationEvent}
                        routeColor={routeColor}
                        isRouteFromFixedPoint={navigationData.startPoint !== null}
                        onNavigationUpdate={handleNavigationUpdate}
                    />
                </>
            )}
        </div>
    );
}