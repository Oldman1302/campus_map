import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function MapController ({ center, zoom }) {
    const map = useMap();

    useEffect(() => {
        if (center && center.length === 2) {
            map.setView(center, zoom);
            console.log('Map centered at:', center);
        }
    }, [center, zoom, map]);

    return null;
};
