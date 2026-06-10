import React, { useEffect, useRef } from 'react';
import './SettingsPanel.css';
import ColorSettings from "./ColorSettings";

export default function SettingsPanel({ onClose, basemap, onBasemapChange, showStats, onToggleStats, cursorColor, onCursorColorChange, routeColor, onRouteColorChange }) {
    const panelRef = useRef(null);

    // Handle click outside the modal
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Prevent scroll/wheel events from reaching the map (same approach as in SearchMarker)
    useEffect(() => {
        const panelElement = panelRef.current;

        if (panelElement) {
            const preventScrollPropagation = (e) => {
                e.stopPropagation();
            };

            // Prevent wheel/scroll events on desktop
            panelElement.addEventListener('wheel', preventScrollPropagation, { passive: false });

            // Prevent touch events on mobile
            panelElement.addEventListener('touchstart', preventScrollPropagation);
            panelElement.addEventListener('touchmove', preventScrollPropagation);
            panelElement.addEventListener('touchend', preventScrollPropagation);

            return () => {
                panelElement.removeEventListener('wheel', preventScrollPropagation);
                panelElement.removeEventListener('touchstart', preventScrollPropagation);
                panelElement.removeEventListener('touchmove', preventScrollPropagation);
                panelElement.removeEventListener('touchend', preventScrollPropagation);
            };
        }
    }, []); // Run once when component mounts

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div
            className="settings-overlay"
            onClick={handleOverlayClick}
        >
            <div
                className="settings-panel"
                ref={panelRef}
            >
                <div className="settings-header">
                    <h3>Map Settings</h3>
                    <button className="settings-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="settings-content">
                    {/* Statistics toggle checkbox */}
                    <div className="settings-section">
                        <label className="settings-checkbox-label">
                            <input
                                type="checkbox"
                                checked={showStats}
                                onChange={(e) => onToggleStats(e.target.checked)}
                            />
                            <span>Show Statistics Panel</span>
                        </label>
                        <p className="settings-hint">
                            Display current map statistics (zoom, center, bounds)
                        </p>
                    </div>

                    {/* Basemap selection */}
                    <div className="settings-section">
                        <label className="settings-label">
                            Map Style
                        </label>
                        <select
                            value={basemap}
                            onChange={(e) => onBasemapChange(e.target.value)}
                            className="settings-select"
                        >
                            <option value="osm">OpenStreetMap (Standard)</option>
                            <option value="hot">OSM HOT (Humanitarian)</option>
                            <option value="dark">Dark Matter (Dark theme)</option>
                            <option value="cycle">CyclOSM (Cycling map)</option>
                            <option value="esri">ESRI Satellite (Satellite)</option>
                        </select>
                        <p className="settings-hint">
                            Choose the map background style
                        </p>
                    </div>

                    {/* Cursor color selection - reusable component */}
                    <ColorSettings
                        label="Cursor Color"
                        color={cursorColor}
                        onColorChange={onCursorColorChange}
                        hint="Choose color for your location marker and accuracy circle"
                    />

                    {/* Route line color selection - reusable component */}
                    <ColorSettings
                        label="Route Line Color"
                        color={routeColor}
                        onColorChange={onRouteColorChange}
                        hint="Choose color for the navigation route line"
                    />
                </div>

                <div className="settings-footer">
                    <button className="settings-btn settings-btn-primary" onClick={onClose}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};
