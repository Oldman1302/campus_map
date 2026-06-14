import { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { getUserLocation } from "../../../services/geolocation";

export default function NavigationBuilder({
                                              routeData,
                                              markers,
                                              isActive,
                                              onRouteComplete,
                                              routeColor,
                                              isRouteFromFixedPoint,
                                              onNavigationUpdate
                                          }) {
    const map = useMap();
    const navigationRef = useRef({
        polyline: null,
        interval: null,
        currentPosition: null,
        originalPathCoordinates: null,
        pathNodes: null,
        distances: null,
        times: null,
        totalDistance: 0,
        totalTime: 0
    });

    // Calculate distance between two points
    const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
        const METERS_PER_DEGREE_LAT = 111320;
        const METERS_PER_DEGREE_LON = 102971; // fixed for 22.365° latitude

        const dLat = (lat2 - lat1) * METERS_PER_DEGREE_LAT;
        const dLon = (lon2 - lon1) * METERS_PER_DEGREE_LON;

        return Math.sqrt(dLat * dLat + dLon * dLon);
    }, []);

    // Find the closest point on the route to user's current position
    const findClosestPointOnRoute = useCallback((userPos, routeCoordinates) => {
        let minDistance = Infinity;
        let closestIndex = 0;

        for (let i = 0; i < routeCoordinates.length; i++) {
            const point = routeCoordinates[i];
            const distance = calculateDistance(
                userPos[0], userPos[1],
                point[0], point[1]
            );
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }

        return { closestIndex, minDistance };
    }, [calculateDistance]);

    // Check deviation from route
    const checkDeviation = useCallback((userPos, routeCoordinates) => {
        const { minDistance } = findClosestPointOnRoute(userPos, routeCoordinates);
        return minDistance;
    }, [findClosestPointOnRoute]);

    // Calculate remaining time and distance based on current position
    const calculateRemainingStats = useCallback((userPos, pathNodes, distances, times) => {
        if (!pathNodes || !distances || !times || distances.length === 0) {
            return {
                leftTime: 0,
                leftDistance: 0
            };
        }

        // Convert path nodes to coordinates
        const routeCoordinates = pathNodes.map(node => {
            if (node.includes(',') && !isNaN(parseFloat(node.split(',')[0]))) {
                const [lat, lng] = node.split(',').map(coordinate => parseFloat(coordinate.trim()));
                return [lat, lng];
            } else {
                const marker = markers.find(m => m.name === node);
                if (marker && marker.coordinates) {
                    return [marker.coordinates[0], marker.coordinates[1]];
                }
                return null;
            }
        }).filter(coordinate => coordinate !== null);

        const { closestIndex } = findClosestPointOnRoute(userPos, routeCoordinates);

        let leftDistance = 0;
        let leftTime = 0;

        // Sum distances and times from closestIndex to end
        for (let i = closestIndex; i < distances.length; i++) {
            leftDistance += distances[i];
            leftTime += times[i];
        }

        return {leftDistance, leftTime};
    }, [findClosestPointOnRoute, markers]);

    const getRemainingPath = useCallback((userPos, originalPathCoordinates) => {
        if (!originalPathCoordinates || originalPathCoordinates.length === 0) return [];

        // Find the closest point on the original route
        const { closestIndex, minDistance } = findClosestPointOnRoute(userPos, originalPathCoordinates);

        // If deviation is within threshold, use remaining path from the closest point
        if (minDistance <= 30) {
            // Slice the path from the closest point to end
            const remainingPath = originalPathCoordinates.slice(closestIndex);
            return [userPos, ...remainingPath];
        }

        // If deviated too much, return null (will trigger recalculation)
        return null;
    }, [findClosestPointOnRoute]);

    // Clear navigation elements
    const clearNavigation = useCallback(() => {
        if (navigationRef.current.interval) {
            clearInterval(navigationRef.current.interval);
            navigationRef.current.interval = null;
        }
        if (navigationRef.current.polyline && map) {
            navigationRef.current.polyline.removeFrom(map);
            navigationRef.current.polyline = null;
        }
    }, [map]);

    // Draw route polyline on map (full or partial)
    const drawRouteOnMap = useCallback((coordinates, isPartial = false) => {
        if (navigationRef.current.polyline && map) {
            navigationRef.current.polyline.removeFrom(map);
        }

        if (!map || !coordinates.length) return;

        const polyline = L.polyline(coordinates, {
            color: routeColor || '#4f46e5',
            weight: 4,
            opacity: 0.8,
            lineJoin: 'round',
            lineCap: 'round'
        }).addTo(map);

        navigationRef.current.polyline = polyline;

        // Only fit bounds on initial draw, not on every update
        if (!isPartial) {
            map.fitBounds(polyline.getBounds(), {
                padding: [50, 50]
            });
        }
    }, [map, routeColor]);

    // Update route line based on current position
    const updateRouteLine = useCallback((userPos, originalPathCoordinates) => {
        if (!originalPathCoordinates) return;

        const remainingPath = getRemainingPath(userPos, originalPathCoordinates);

        if (remainingPath && remainingPath.length > 0) {
            // Draw remaining path (from current position to destination)
            drawRouteOnMap(remainingPath, true);
            console.log('Route line updated to show remaining path');
        }
    }, [getRemainingPath, drawRouteOnMap]);

    // Start tracking user position
    const startNavigationTracking = useCallback((coordinates, routeData) => {
        // Clear existing interval
        if (navigationRef.current.interval) {
            clearInterval(navigationRef.current.interval);
        }

        // Store original path for updates
        navigationRef.current.originalPathCoordinates = coordinates;

        // NEW: Store path data for stats calculation
        const pathNodes = routeData.path.split(' -> ');
        navigationRef.current.pathNodes = pathNodes;
        navigationRef.current.distances = routeData.distances || [];
        navigationRef.current.times = routeData.times || [];
        navigationRef.current.totalDistance = routeData.distance || 0;
        navigationRef.current.totalTime = routeData.time || 0;

        // Send initial stats to parent
        if (onNavigationUpdate) {
            onNavigationUpdate({
                leftDistance: routeData.distance || 0,
                leftTime: routeData.time || 0
            });
        }

        // Check position every 5 seconds
        navigationRef.current.interval = setInterval(async () => {
            // if navigation is no longer active, stop tracking
            if (!isActive) {
                clearNavigation();
                return;
            }

            try {
                const userPos = await getUserLocation();
                const userLatLng = [userPos.lat, userPos.lng];

                // Skip update if position hasn't changed significantly (less than 2 meters)
                const lastPos = navigationRef.current.currentPosition;
                if (lastPos) {
                    const distanceMoved = calculateDistance(
                        lastPos[0], lastPos[1],
                        userLatLng[0], userLatLng[1]
                    );
                    if (distanceMoved < 2) {
                        // Position hasn't changed, skip update
                        return;
                    }
                }

                navigationRef.current.currentPosition = userLatLng;

                // Update route line to show remaining path and check the deviation only if route is from current location
                if (!isRouteFromFixedPoint) {
                    updateRouteLine(userLatLng, navigationRef.current.originalPathCoordinates);

                    const minDistance = checkDeviation(userLatLng, coordinates);
                    if (minDistance > 30) {
                        // Deviation > 30 meters
                        console.log(`Deviation detected: ${minDistance.toFixed(1)}m > 30m`);
                        if (onRouteComplete) {
                            onRouteComplete({
                                deviated: true,
                                deviationDistance: minDistance,
                                currentPosition: userLatLng
                            });
                        }
                    } else {
                        // Check if reached destination
                        const destinationPoint = coordinates[coordinates.length - 1];
                        const distanceToDestination = calculateDistance(
                            userLatLng[0], userLatLng[1],
                            destinationPoint[0], destinationPoint[1]
                        );

                        if (distanceToDestination < 10) {
                            // Arrived at destination
                            console.log('Destination reached!');
                            if (onRouteComplete) {
                                onRouteComplete({
                                    completed: true,
                                    distance: routeData.distance,
                                    time: routeData.time
                                });
                            }
                            clearNavigation();
                        }
                    }
                }
                const {leftDistance, leftTime} = calculateRemainingStats(
                    userLatLng,
                    navigationRef.current.pathNodes,
                    navigationRef.current.distances,
                    navigationRef.current.times
                );

                // Send updates to parent
                if (onNavigationUpdate) {
                    onNavigationUpdate({
                        leftDistance: leftDistance,
                        leftTime: leftTime
                    });
                }
            } catch (error) {
                console.error('Error tracking position:', error);
            }
        }, 5000);
    }, [checkDeviation, calculateDistance, clearNavigation, onRouteComplete, updateRouteLine, isActive, isRouteFromFixedPoint, calculateRemainingStats, onNavigationUpdate]);

    // Parse route path and convert to coordinates
    useEffect(() => {
        if (!routeData?.path || !markers?.length || !isActive) return;

        // Split path string into array
        const pathNodes = routeData.path.split(' -> ');
        console.log('Path nodes:', pathNodes);

        // Create a Map for O(1) lookups instead of O(n) find
        const markersMap = new Map();
        markers.forEach(marker => {
            markersMap.set(marker.name, marker);
        });

        // Convert node names to coordinates using Map (fast lookup)
        const pathCoordinates = [];
        for (const node of pathNodes) {
            // Check if node is coordinates format (contains comma)
            if (node.includes(',') && !isNaN(parseFloat(node.split(',')[0]))) {
                const [lat, lng] = node.split(',').map(coord => parseFloat(coord.trim()));
                pathCoordinates.push([lat, lng]);
            } else {
                // Fast lookup using Map
                const marker = markersMap.get(node);
                if (marker && marker.coordinates) {
                    pathCoordinates.push([marker.coordinates[0], marker.coordinates[1]]);
                } else {
                    console.warn(`Marker not found: ${node}`);
                }
            }
        }

        // Draw full route initially
        drawRouteOnMap(pathCoordinates, false);

        // Start navigation tracking
        startNavigationTracking(pathCoordinates, routeData);

        return () => {
            clearNavigation();
        };
    }, [routeData, markers, isActive, drawRouteOnMap, startNavigationTracking, clearNavigation]);

    // Stop navigation on unmount
    useEffect(() => {
        return () => {
            clearNavigation();
        };
    }, [clearNavigation]);

    return null;
}
