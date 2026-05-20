import React, { useState } from 'react';
import "./SettingsButton.css"
import SettingsPanel from "../SettingsPanel/SettingsPanel";

export default function SettingsButton({ basemap, onBasemapChange, showStats, onToggleStats, cursorColor, onCursorColorChange }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <>
            <div className="settings-button-container">
                <button
                    className="settings-button"
                    onClick={() => setIsSettingsOpen(true)}
                    title="Settings"
                >
                    ⚙️
                </button>
            </div>

            {isSettingsOpen && (
                <SettingsPanel
                    onClose={() => setIsSettingsOpen(false)}
                    basemap={basemap}
                    onBasemapChange={onBasemapChange}
                    showStats={showStats}
                    onToggleStats={onToggleStats}
                    cursorColor={cursorColor}
                    onCursorColorChange={onCursorColorChange}
                />
            )}
        </>
    );
}