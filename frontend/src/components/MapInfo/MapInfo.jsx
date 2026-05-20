import React, { useState } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import {useLocation} from "../../context/LocationContext";
import './MapInfo.css';

export default function MapInfo() {
    const map = useMap();
    const { userLocation, locationError } = useLocation();

    const [zoom, setZoom] = useState(map.getZoom());
    const [center, setCenter] = useState(map.getCenter());
    const [cursor, setCursor] = useState({ lat: 0, lng: 0 });


    // Listen to map events
    useMapEvents({
        zoomend: () => {
            setZoom(map.getZoom());
        },
        moveend: () => {
            const newCenter = map.getCenter();
            setCenter({ lat: newCenter.lat, lng: newCenter.lng });
        },
        mousemove: (e) => {
            setCursor({ lat: e.latlng.lat, lng: e.latlng.lng });
        }
    });

    const formatCoordinate = (coord) => {
        return coord.toFixed(6);
    };

    const formatAccuracy = (accuracy) => {
        return `±${Math.round(accuracy)}m`;
    };

    return (
        <div className="map-info">
            <h4>Map Information</h4>

            <div className="info-row">
                <span className="info-label">Current Zoom:</span>
                <span className="info-value">{zoom}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Map Center:</span>
                <span className="info-value">
                    {formatCoordinate(center.lat)}, {formatCoordinate(center.lng)}
                </span>
            </div>

            <div className="info-row">
                <span className="info-label">Cursor Position:</span>
                <span className="info-value">
                    {formatCoordinate(cursor.lat)}, {formatCoordinate(cursor.lng)}
                </span>
            </div>

            <div className="info-row">
                <span className="info-label">My Location:</span>
                <span className="info-value">
                    {locationError ? (
                        <span className="error">⚠️ {locationError}</span>
                    ) : userLocation ? (
                        <span>
                            {formatCoordinate(userLocation.lat)}, {formatCoordinate(userLocation.lng)}
                            {userLocation.accuracy && (
                                <span className="accuracy"> ({formatAccuracy(userLocation.accuracy)})</span>
                            )}
                        </span>
                    ) : (
                        <span className="loading">Getting location...</span>
                    )}
                </span>
            </div>
        </div>
    );
}