import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { BUILDING_LOGOS } from "../../../constants/buildingLogos";
import { fetchMarkers } from "../../../services/markersAPI";
import './СustomMarkers.css';
import {ALWAYS_VISIBLE_TYPES} from "../../../constants/visibleTypes";

export default function CustomMarkers() {
    const map = useMap();
    const [markers, setMarkers] = useState([]);
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

    // Load markers from server
    useEffect(() => {
        const loadMarkers = async () => {
            try {
                const data = await fetchMarkers();
                const buildingMarkers = data.filter(point => point.isBuilding === true);
                setMarkers(buildingMarkers);
            } catch (err) {
                console.error('Error loading markers:', err);
                setMarkers([]);
            }
        };

        loadMarkers();
    }, []);

    // Add markers to map when data is loaded
    useEffect(() => {
        if (!map || !markers.length) return;

        // Create custom marker icon with image
        const createMarkerIcon = (type, name, coordinates) => {
            const imagePath = getImageByType(type);
            const alwaysShow = shouldAlwaysShowLabel(type);

            // Build HTML for marker
            let markerHtml = `
                <div class="marker-container">
                    <img src="${imagePath}" alt="${type || 'marker'}" class="marker-image" />
            `;

            if (!alwaysShow) {
                markerHtml += `
                            <div class="marker-tooltip">
                                <p>${name}</p>
                                <p>${coordinates?.[0]}, ${coordinates?.[1]}</p>
                            </div>
                `;
            } else {
                markerHtml += `<div class="marker-label">${name}</div>`;
                markerHtml += `
                            <div class="marker-tooltip">
                                <p>${coordinates?.[0]}, ${coordinates?.[1]}</p>
                            </div>
                `;
            }


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
        const newMarkers = markers.map(point => {
            console.log(``);
            console.log(`point: ${point.type}`);
            console.log(`should show popud? -${!shouldAlwaysShowLabel(point.type)}`);
            const [lat, lng] = point.coordinates;
            const position = [lat, lng];
            const icon = createMarkerIcon(point.type, point.name, point.coordinates);

            const marker = L.marker(position, { icon }).addTo(map);

            // Add popup only if type should NOT always show label AND description exists
            // For types that always show label (educational_building, dormitory) - no popup
//             if (!shouldAlwaysShowLabel(point.type)) {
//                 console.log('✅ Adding popup for:', point.type);
//                 marker.bindPopup(`
//                     <div class="custom-popup">
//                         <strong>${point.name}</strong>
// <!--                        <p>${point.description}</p>-->
//                     </div>
//                 `);
//             }

            return marker;
        });

        markersRef.current = newMarkers;

        // Cleanup on unmount
        return () => {
            markersRef.current.forEach(marker => {
                if (marker && map.hasLayer(marker)) {
                    map.removeLayer(marker);
                }
            });
        };
    }, [map, markers]);

    return null;
}