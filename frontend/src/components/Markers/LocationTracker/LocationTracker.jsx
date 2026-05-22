import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { useLocation } from '../../../context/LocationContext';
import './LocationTracker.css';

const LocationTracker = ({ cursorColor }) => {
    const map = useMap();
    const { userLocation, locationError, isWatching } = useLocation();
    const markerRef = useRef(null);
    const circleRef = useRef(null);

    // Create custom marker icon with dynamic color
    const createCustomIcon = (color) => {
        return L.divIcon({
            className: 'custom-location-marker',
            html: `
                <div class="location-marker-container">
                    <div class="location-marker-dot" style="background-color: ${color};"></div>
                    <div class="location-marker-pulse" style="background-color: ${color};"></div>
                </div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        });
    };

    // Create or update marker when location or color changes
    useEffect(() => {
        if (!map) return;

        if (userLocation && !locationError) {
            const { lat, lng, accuracy } = userLocation;
            const position = [lat, lng];

            // Remove existing marker and circle
            if (markerRef.current) {
                map.removeLayer(markerRef.current);
            }
            if (circleRef.current) {
                map.removeLayer(circleRef.current);
            }

            // Create new marker with current color
            const customIcon = createCustomIcon(cursorColor);
            const marker = L.marker(position, { icon: customIcon })
                .addTo(map)
                .bindPopup(`
                    <div class="location-popup">
                        <strong>My Location</strong>
                        <span>Lat: ${lat.toFixed(6)}</span>
                        <span>Lng: ${lng.toFixed(6)}</span>
                        <span>Accuracy: ±${Math.round(accuracy)}m</span>
                        <span>Status: ${isWatching ? 'Live tracking' : 'Single fix'}</span>
                    </div>
                `);

            // Add accuracy circle
            const circle = L.circle(position, {
                radius: accuracy,
                color: cursorColor,
                fillColor: cursorColor,
                fillOpacity: 0.15,
                weight: 2,
                opacity: 0.6
            }).addTo(map);

            markerRef.current = marker;
            circleRef.current = circle;
        }

        // Cleanup on unmount
        return () => {
            if (markerRef.current) {
                map.removeLayer(markerRef.current);
            }
            if (circleRef.current) {
                map.removeLayer(circleRef.current);
            }
        };
    }, [userLocation, locationError, map, cursorColor, isWatching]);

    return null;
};

export default LocationTracker;