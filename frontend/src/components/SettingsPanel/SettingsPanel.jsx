import React, { useEffect } from 'react';
import './SettingsPanel.css';
import {COLOR_PRESETS} from "../../constants/colors";

export default function SettingsPanel({ onClose, basemap, onBasemapChange, showStats, onToggleStats, cursorColor, onCursorColorChange }) {
    // Handle click outside the modal
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

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
        <div className="settings-overlay" onClick={handleOverlayClick}>
            <div className="settings-panel">
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

                    {/* Cursor color selection */}
                    <div className="settings-section">
                        <label className="settings-label">Cursor Color</label>

                        {/* Color presets from constants */}
                        <div className="color-presets">
                            {COLOR_PRESETS.map((color) => (
                                <button
                                    key={color.value}
                                    className={`color-preset-btn ${cursorColor === color.value ? 'active' : ''}`}
                                    style={{ backgroundColor: color.value }}
                                    onClick={() => onCursorColorChange(color.value)}
                                    title={color.name}
                                />
                            ))}
                        </div>

                        {/* Custom color picker */}
                        <div className="custom-color">
                            <input
                                type="color"
                                value={cursorColor}
                                onChange={(e) => onCursorColorChange(e.target.value)}
                                className="color-picker"
                            />
                            <span className="color-value">{cursorColor}</span>
                        </div>

                        <p className="settings-hint">
                            Choose color for your location marker and accuracy circle
                        </p>
                    </div>
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
