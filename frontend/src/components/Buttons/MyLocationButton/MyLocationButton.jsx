import React, { useState } from 'react';
import { getUserLocation } from '../../../services/geolocation';
import {useLocation} from "../../../context/LocationContext";
import '../Button.css';
import './MyLocationButton.css';

export default function MyLocationButton({ onCenterChange }) {
    const [isLocating, setIsLocating] = useState(false);
    const { userLocation, locationError } = useLocation();

    const handleFindMyLocation = async (event) => {
        // Prevent event bubbling to map
        event.preventDefault();
        event.stopPropagation();

        // Prevent double execution on mobile (touch + click)
        if (isLocating) return;

        try {
            setIsLocating(true);

            let lat, lng;

            if (userLocation && !locationError) {
                lat = userLocation.lat;
                lng = userLocation.lng;
            } else {
                // No cached location, need to get it (only happens first time)
                const position = await getUserLocation();
                lat = position.lat;
                lng = position.lng;
            }

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
                // onTouchEnd={handleFindMyLocation}
                onTouchStart={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
                title="Find my location"
                disabled={isLocating}
            >
                {isLocating ? '⏳' : '📍'}
            </button>
        </div>
    );
}