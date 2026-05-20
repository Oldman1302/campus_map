import React, { useState } from 'react';
// import SettingsPanel from './SettingsPanel';

export default function SettingsButton({ basemap, onBasemapChange, showStats, onToggleStats }) {
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

            {/*{isSettingsOpen && (*/}
            {/*    <SettingsPanel*/}
            {/*        onClose={() => setIsSettingsOpen(false)}*/}
            {/*        basemap={basemap}*/}
            {/*        onBasemapChange={onBasemapChange}*/}
            {/*        showStats={showStats}*/}
            {/*        onToggleStats={onToggleStats}*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
}