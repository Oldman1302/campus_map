import React, { useState } from 'react';
import '../Button.css';
import './SettingsButton.css';
import SettingsPanel from "../../SettingsPanel/SettingsPanel";

export default function SettingsButton({
                                           basemap,
                                           onBasemapChange,
                                           showStats,
                                           onToggleStats,
                                           cursorColor,
                                           onCursorColorChange,
                                           routeColor,
                                           onRouteColorChange
                                       }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <>
            <div className="settings-button-container base-button-container">
                <button
                    className="settings-button base-button"
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
                    routeColor={routeColor}
                    onRouteColorChange={onRouteColorChange}
                />
            )}
        </>
    );
}