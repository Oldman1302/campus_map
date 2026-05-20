import React from 'react';
import MapInfo from "./MapInfo/MapInfo";

class Basemap extends React.Component {
    onChange = (event) => {
        const basemap = event.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(basemap);
        }
    }

    render() {
        return (
            <div className="basemaps-container">
                <select value={this.props.basemap} onChange={this.onChange}>
                    <option value="osm">OSM</option>
                    <option value="hot">OSM HOT</option>
                    <option value="dark">DARK</option>
                    <option value="cycle">CYCLE MAP</option>
                    <option value="esri">ESRI</option>
                </select>
                {this.state.showStats && <MapInfo />}
            </div>
        );
    }
};

export default Basemap;