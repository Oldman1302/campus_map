import React, { createContext, useContext, useState, useEffect } from 'react';
import { watchLocationInterval } from '../services/geolocation';

// Create context
const LocationContext = createContext();

// Custom hook to use location anywhere
export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useLocation must be used within LocationProvider');
    }
    return context;
};

// Provider component
export const LocationProvider = ({ children }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [isWatching, setIsWatching] = useState(false);

    useEffect(() => {
        // Start watching location once for the entire app
        const stopWatching = watchLocationInterval(
            (position, error) => {
                if (error) {
                    setLocationError(error.message);
                    setUserLocation(null);
                } else {
                    setUserLocation(position);
                    setLocationError(null);
                }
                setIsWatching(true);
            },
            5000 // Update every 5 seconds
        );

        // Cleanup on app unmount
        return () => {
            stopWatching();
        };
    }, []);

    // Function to manually refresh location
    const refreshLocation = async () => {
        // Implementation if needed
    };

    const value = {
        userLocation,
        locationError,
        isWatching,
        refreshLocation
    };

    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    );
};