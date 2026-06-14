import React from 'react';
import '../Button.css';
import './StopNavigationButton.css';

export default function StopNavigationButton({ onStop }) {
    return (
        <div className="stopnav-button-container base-button-container">
            <button
                className="stopnav-button base-button"
                onClick={onStop}
                title="Stop navigation"
            >
                ❌
            </button>
        </div>
    );
}