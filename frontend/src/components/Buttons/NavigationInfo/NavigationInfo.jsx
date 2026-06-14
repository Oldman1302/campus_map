import React, { useState, useEffect, useRef } from 'react';
import './NavigationInfo.css';

export default function NavigationInfo({ distanceRef, timeRef }) {
    const [time, setTime] = useState(0);
    const [distance, setDistance] = useState(0);
    const updateIntervalRef = useRef(null);

    // Format distance: km if > 100m, otherwise meters
    const formatDistance = (distance) => {
        if (distance >= 100) {
            return `${(distance / 1000).toFixed(1)}km`;
        }
        return `${Math.round(distance)}m`;
    };

    // Format time: hours if > 3600s, otherwise minutes
    const formatTime = (time) => {
        if (time >= 3600) {
            const hours = Math.floor(time / 3600);
            const minutes = Math.round((time % 3600) / 60);
            return minutes > 0 ? `${hours}h ${minutes}min` : `${hours}h`;
        }
        const minutes = Math.floor(time / 60);
        return `${Math.round(minutes > 0 ? minutes : 1)}min`;
    };

    // Poll refs for updates every 2 seconds
    useEffect(() => {
        // Set initial values
        setTime(timeRef.current || 0);
        setDistance(distanceRef.current || 0);

        // Check for changes every second
        updateIntervalRef.current = setInterval(() => {
            const newTime = timeRef.current || 0;
            const newDistance = distanceRef.current || 0;

            setTime(prevTime => prevTime !== newTime ? newTime : prevTime);
            setDistance(prevDistance => prevDistance !== newDistance ? newDistance : prevDistance);
        }, 2000);

        return () => {
            if (updateIntervalRef.current) {
                clearInterval(updateIntervalRef.current);
            }
        };
    }, [timeRef, distanceRef]);

    return (
        <div className="navigation-info-container base-button-container">
            <div className="navigation-info">
                <div className="info-item">
                    <span className="info-value">{formatTime(time)}</span>
                </div>
                <div className="info-item">
                    <span className="info-value">{formatDistance(distance)}</span>
                </div>
            </div>
        </div>
    );
}
