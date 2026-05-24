import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import { getUserLocation } from '../../../services/geolocation';
import '../Button.css';
import './MyLocationButton.css';

export default function MyLocationButton({ onCenterChange }) {
    const map = useMap();
    const [isLocating, setIsLocating] = useState(false);

    const handleFindMyLocation = async () => {
        try {
            setIsLocating(true);

            const position = await getUserLocation();
            const { lat, lng } = position;


            // Fly to user location with smooth animation
            map.flyTo([lat, lng], map.getZoom(), {
                duration: 1.5,
                animate: true
            });

            // Notify parent component to update center in state
            if (onCenterChange) {
                onCenterChange(lat, lng);
            }

        } catch (error) {
            console.error('Error finding location:', error);
            alert('Could not find your location. Please check your permissions.');
        } finally {
            setIsLocating(false);
        }
    };

    return (
        <div className="mylocation-button-container base-button-container">
            <button
                className={`mylocation-button base-button ${isLocating ? 'loading' : ''}`}
                onClick={handleFindMyLocation}
                title="Find my location"
                disabled={isLocating}
            >
                📍
            </button>
        </div>
    );
}