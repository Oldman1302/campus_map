import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import './Map.css';
import SettingsButton from "./components/Buttons/SettingsButton/SettingsButton";
import MapInfo from "./components/MapInfo/MapInfo";
import MapController from "./components/MapController"; // it's needed for centralization on our map
import {saveBasemap, loadBasemap, saveShowStats, loadShowStats, saveCursorColor, loadCursorColor, saveRouteColor, loadRouteColor} from "./services/storage";
import LocationTracker from "./components/Markers/LocationTracker/LocationTracker";
import CustomMarkers from "./components/Markers/CustomMarkers/CustomMarkers";
import {getUserLocation} from "./services/geolocation";
import MyLocationButton from "./components/Buttons/MyLocationButton/MyLocationButton";
import { fetchMarkers} from "./services/server/markersAPI";
import SearchMarker from "./components/Navigation/SearchMarker/SearchMarker";
import StopNavigationButton from "./components/Buttons/StopNavigationButton/StopNavigationButton";
import {fetchRoute} from "./services/server/routeAPI";

class MapComponent extends React.Component {
    state = {
        centerLat: 22.36670,
        centerLng: 113.53832,
        zoom: 17,
        northWest: [22.37412, 113.507609],
        southEast: [22.35961, 113.546551],
        basemap: loadBasemap(),
        minZoom: 14,
        maxZoom: 18,
        showStats: loadShowStats(),
        cursorColor: loadCursorColor(),
        routeColor: loadRouteColor(),
        isLocationLoaded: false,  // Track if we've tried to get location
        markers: [],
        isLoadingMarkers: true,
        isNavigating: false,
        navigationDataToMarker: null,
        selectedStartPoint: null
    };

    // Get user location and markers once when component mounts
    async componentDidMount() {
        await this.getUserLocationOnce();
        await this.loadAllMarkers();
    }

    getUserLocationOnce = async () => {
        try {
            const position = await getUserLocation();
            // Update center with user's location
            this.setState({
                centerLat: position.lat,
                centerLng: position.lng,
                isLocationLoaded: true
            });
            console.log('Map centered on user location:', position.lat, position.lng);
        } catch (error) {
            console.log('Could not get user location, Map centered on default position', this.state.centerLat, this.state.centerLng);
            this.setState({ isLocationLoaded: true });
        }
    }

    loadAllMarkers = async () => {
        try {
            const data = await fetchMarkers();
            this.setState({
                markers: data,
                isLoadingMarkers: false
            });
            console.log('All markers loaded:', data.length);
        } catch (error) {
            console.error('Error loading markers:', error);
            this.setState({
                markers: [],
                isLoadingMarkers: false
            });
        }
    }

    onBMChange = (bm) => {
        this.setState({basemap: bm});
        saveBasemap(bm);
    };

    onToggleStats = (show) => {
        this.setState({ showStats: show });
        saveShowStats(show);
    }

    onCursorColorChange = (color) => {
        this.setState({ cursorColor: color });
        saveCursorColor(color);

        // Dispatch event to notify LocationTracker
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'map_cursor_color',
            newValue: color,
            oldValue: this.state.cursorColor
        }));
    }

    onRouteColorChange = (color) => {
        this.setState({ routeColor: color });
        saveRouteColor(color);

        // Dispatch event to notify NavigationBuilder
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'map_route_color',
            newValue: color,
            oldValue: this.state.routeColor
        }));
    }

    onCenterChange = (lat, lng) => {
        this.setState({
            centerLat: lat,
            centerLng: lng
        });
    }

    // Navigation state management
    onNavigationStart = () => {
        this.setState({ isNavigating: true });
    }

    onNavigationStop = () => {
        this.setState({
            isNavigating: false,
            navigationDataToMarker: null
        });
    }

    // start navigation if user clicked on Marker (only if the navigation is not active)
    handleMarkerClick = async (marker) => {
        // If we already have navigation mode, the click on marker is not active
        if (this.state.isNavigating) return;
        await this.startNavigationToMarker(this.state.selectedStartPoint, marker);
    }

    // Handle selected start point from SearchMarker
    onStartPointSelect = (marker) => {
        this.setState({ selectedStartPoint: marker });
    }

    // Universal function to build route to a destination marker
    // If startMarker is provided, route starts from that marker
    // Otherwise, route starts from user's current location
    startNavigationToMarker = async (fromMarker = null, toMarker) => {
        try {
            let from;

            if (fromMarker) {
                from = `${fromMarker.coordinates[0].toFixed(6)}, ${fromMarker.coordinates[1].toFixed(6)}`;
            } else {
                from = await getUserLocation().then(fromObj => fromObj?.lat.toFixed(6) + ", " + fromObj?.lng.toFixed(6));
            }

            const route = await fetchRoute(from, toMarker.name, "time");

            alert(`Route from ${from} to ${toMarker.name}:\n\n` +
                `Strategy: ${route.strategy}\n` +
                `Distance: ${route.distance} meters\n` +
                `Time: ${route.time} seconds\n\n` +
                `Path: ${route.path}\n\n`);

            console.log(toMarker)

            // Load data for navigation
            this.setState({
                navigationDataToMarker: {
                    path: route.path,
                    distance: route.distance,
                    time: route.time,
                    strategy: route.strategy,
                    destination: toMarker,
                    startPoint: fromMarker
                }
            });

            this.onNavigationStart();

        } catch (error) {
            alert(`Failed to fetch route: ${error.message}`);
        }
    }

    render() {
        const center = [this.state.centerLat, this.state.centerLng];
        const bounds = [this.state.northWest, this.state.southEast];

        const basemapDict = {
            osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
            cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
            esri: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        }

        return (
            <>
                <MapContainer zoom={this.state.zoom}
                              center={center}
                              maxBounds={bounds}
                              maxBoundsViscosity={0.5}
                              minZoom={this.state.minZoom}
                              maxZoom={this.state.maxZoom}
                              className="map-container"
                >
                    <SearchMarker
                        markers={this.state.markers}
                        isLoading={this.state.isLoadingMarkers}
                        routeColor={this.state.routeColor}
                        isNavigating={this.state.isNavigating}
                        onNavigationStart={this.onNavigationStart}
                        onNavigationStop={this.onNavigationStop}
                        navigationDataToMarker={this.state.navigationDataToMarker}
                        buildRoute={this.startNavigationToMarker}
                        selectedStartPoint={this.state.selectedStartPoint}
                        onStartPointSelect={this.onStartPointSelect}
                    />
                    <TileLayer
                        // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={basemapDict[this.state.basemap]}
                        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    <CustomMarkers
                        markers={this.state.markers}
                        onMarkerClick={this.handleMarkerClick}
                    />
                    {this.state.showStats && <MapInfo/>}
                    <LocationTracker cursorColor={this.state.cursorColor} />
                    <MapController center={center} zoom={this.state.zoom}
                    />

                    <SettingsButton
                        basemap={this.state.basemap}
                        onBasemapChange={this.onBMChange}
                        showStats={this.state.showStats}
                        onToggleStats={this.onToggleStats}
                        cursorColor={this.state.cursorColor}
                        onCursorColorChange={this.onCursorColorChange}
                        routeColor={this.state.routeColor}
                        onRouteColorChange={this.onRouteColorChange}
                    />

                    <MyLocationButton onCenterChange={this.onCenterChange} />

                    {this.state.isNavigating && (
                        <StopNavigationButton onStop={this.onNavigationStop} />
                    )}

                </MapContainer>
            </>
        )
    }
}

export default MapComponent;
