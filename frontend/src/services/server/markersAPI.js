import {SERVER_URL} from "../../constants/serverURL";

export const fetchMarkers = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/`);

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch markers:', error);
        throw error;
    }
};
