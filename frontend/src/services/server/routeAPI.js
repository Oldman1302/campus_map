import {SERVER_URL} from '../../constants/serverURL';

/**
 * Fetch route between two points
 * @param {string} from - Starting point name or coordinates
 * @param {string} to - Destination point name or coordinates
 * @param {string} type - Route type: 'distance' (default) or 'time'
 * @returns {Promise<Object>} - Route data including path, distance, duration
 */
export const fetchRoute = async (from, to, type = 'distance') => {
    try {
        const encodedFrom = encodeURIComponent(from);
        const encodedTo = encodeURIComponent(to);

        const url = `${SERVER_URL}/route?from=${encodedFrom}&to=${encodedTo}&strategy=${type}`;

        console.log('Fetching route from URL:', url);

        const response = await fetch(url);

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching route:', error);
        throw error;
    }
};
