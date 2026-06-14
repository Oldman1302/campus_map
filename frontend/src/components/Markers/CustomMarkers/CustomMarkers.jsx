import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { BUILDING_LOGOS } from "../../../constants/buildingLogos";
import './СustomMarkers.css';
import {ALWAYS_VISIBLE_TYPES} from "../../../constants/visibleTypes";

export default function CustomMarkers({ markers=[], onMarkerClick }) {
    const map = useMap();
    const markersRef = useRef([]);

    // Get image path by type from BUILDING_LOGOS
    const getImageByType = (type) => {
        if (!type) return BUILDING_LOGOS.default;
        return BUILDING_LOGOS[type] || BUILDING_LOGOS.default;
    };

    // Check if type should always show label
    const shouldAlwaysShowLabel = (type) => {
        return ALWAYS_VISIBLE_TYPES.includes(type);
    };

    // Add markers to map when data is loaded
    useEffect(() => {
        if (!map || !markers.length) return;

        // Filter only building markers
        const buildingMarkers = markers.filter(point => point.isBuilding === true);

        if (buildingMarkers.length === 0) {
            console.log('No building markers to display');
            return;
        }

        // Create custom marker icon with image
        const createMarkerIcon = (type, name, coordinates) => {
            const imagePath = getImageByType(type);
            const alwaysShow = shouldAlwaysShowLabel(type);

            // Build HTML for marker
            let markerHtml = `
                <div class="marker-container">
                    <img src="${imagePath}" alt="${type || 'marker'}" class="marker-image" />
            `;

            if (alwaysShow) {
                markerHtml += `
                                <div class="marker-label">${name}</div>
                                <div class="marker-tooltip">
                              `;
            } else {
                markerHtml += `<div class="marker-tooltip"><p>${name}</p>`
            }

            markerHtml += `        <p>${coordinates?.[0]}, ${coordinates?.[1]}</p>
                                </div>
                            </div>
                           `;


            return L.divIcon({
                className: 'custom-marker',
                html: markerHtml,
                iconSize: [14, 14],
                iconAnchor: [7, 7],
                popupAnchor: [0, -8]
            });
        };

        // Clear existing markers
        markersRef.current.forEach(marker => {
            if (marker && map.hasLayer(marker)) {
                map.removeLayer(marker);
            }
        });
        markersRef.current = [];

        // Add new markers
        markersRef.current = buildingMarkers.map(point => {
            const [lat, lng] = point.coordinates;
            const position = [lat, lng];
            const icon = createMarkerIcon(point.type, point.name, point.coordinates);

            const marker = L.marker(position, { icon }).addTo(map);

            // Add click handler
            if (onMarkerClick) {
                marker.on('contextmenu', () => {
                    onMarkerClick(point);
                });
            }

            return marker;
        });

        // Cleanup on unmount
        return () => {
            markersRef.current.forEach(marker => {
                if (marker && map.hasLayer(marker)) {
                    map.removeLayer(marker);
                }
            });
        };
    }, [map, markers, onMarkerClick]);

    return null;
}