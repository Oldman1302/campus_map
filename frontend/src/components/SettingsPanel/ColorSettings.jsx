import React from 'react';
import { COLOR_PRESETS } from '../../constants/colors';

export default function ColorSettings({label, color, onColorChange, hint}) {
    return (
        <div className="settings-section">
            <label className="settings-label">{label}</label>

            {/* Color presets from constants */}
            <div className="color-presets">
                {COLOR_PRESETS.map((preset) => (
                    <button
                        key={preset.value}
                        className={`color-preset-btn ${color === preset.value ? 'active' : ''}`}
                        style={{ backgroundColor: preset.value }}
                        onClick={() => onColorChange(preset.value)}
                        title={preset.name}
                    />
                ))}
            </div>

            {/* Custom color picker */}
            <div className="custom-color">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => onColorChange(e.target.value)}
                    className="color-picker"
                />
                <span className="color-value">{color}</span>
            </div>

            {hint && <p className="settings-hint">{hint}</p>}
        </div>
    );
}