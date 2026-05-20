// services/geolocation.js

// Simple function to get user location
export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy
                });
            },
            (error) => {
                reject(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    });
};

// Simple function to watch position with interval
export const watchLocationInterval = (callback, interval = 5000) => {
    let isActive = true;

    const fetchLocation = async () => {
        if (!isActive) return;

        try {
            const position = await getUserLocation();
            callback(position);
        } catch (error) {
            console.error('Location error:', error);
            callback(null, error);
        }
    };

    // Fetch immediately
    fetchLocation();

    // Then fetch every X seconds
    const intervalId = setInterval(fetchLocation, interval);

    // Return cleanup function
    return () => {
        isActive = false;
        clearInterval(intervalId);
    };
};