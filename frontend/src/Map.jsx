import React from 'react';
import {MapContainer, TileLayer } from "react-leaflet";
import './Map.css';
import SettingsButton from "./components/Buttons/SettingsButton/SettingsButton";
import MapInfo from "./components/MapInfo/MapInfo";
import MapController from "./components/MapController"; // it's needed for centralization on our map
import {saveBasemap, loadBasemap, saveShowStats, loadShowStats, saveCursorColor, loadCursorColor} from "./services/storage";
import LocationTracker from "./components/Markers/LocationTracker/LocationTracker";
import CustomMarkers from "./components/Markers/CustomMarkers/CustomMarkers";
import {getUserLocation} from "./services/geolocation";
import MyLocationButton from "./components/Buttons/MyLocationButton/MyLocationButton";

class MapComponent extends React.Component {
    state = {
        centerLat: 22.36670,
        centerLng: 113.53832,
        zoom: 17,
        northWest: [22.37412, 113.507609],
        southEast: [22.35961, 113.546551],
        basemap: loadBasemap(),
        minZoom: 14,
        maxZoom: 19,
        showStats: loadShowStats(),
        cursorColor: loadCursorColor(),
        isLocationLoaded: false  // Track if we've tried to get location
    };

    // Get user location once when component mounts
    componentDidMount() {
        this.getUserLocationOnce();
    }

    getUserLocationOnce = async () => {
        try {
            const position = await getUserLocation();
            // Update center with user's location
            this.setState({
                centerLat: position.lat,
                centerLng: position.lng,
                isLocationLoaded: true
            });
            console.log('Map centered on user location:', position.lat, position.lng);
        } catch (error) {
            console.log('Could not get user location, Map centered on default position', this.state.centerLat, this.state.centerLng);
            this.setState({ isLocationLoaded: true });
        }
    }

    onBMChange = (bm) => {
        this.setState({basemap: bm});
        saveBasemap(bm);
    };

    onToggleStats = (show) => {
        this.setState({ showStats: show });
        saveShowStats(show);
    }

    onCursorColorChange = (color) => {
        this.setState({ cursorColor: color });
        saveCursorColor(color);

        // Dispatch event to notify LocationTracker
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'map_cursor_color',
            newValue: color,
            oldValue: this.state.cursorColor
        }));
    }

    render() {
        const center = [this.state.centerLat, this.state.centerLng];
        const bounds = [this.state.northWest, this.state.southEast];

        const basemapDict = {
            osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
            cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
            esri: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        }

        return (
            <>
                <MapContainer zoom={this.state.zoom}
                              center={center}
                              maxBounds={bounds}
                              maxBoundsViscosity={0.5}
                              minZoom={this.state.minZoom}
                              maxZoom={this.state.maxZoom}
                              className="map-container"
                >
                    <TileLayer
                        // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={basemapDict[this.state.basemap]}
                        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    <CustomMarkers />
                    {/*<Basemap basemap={this.state.basemap} onChange={this.onBMChange}/>*/}
                    {this.state.showStats && <MapInfo/>}
                    <LocationTracker cursorColor={this.state.cursorColor} />
                    <MapController center={center} zoom={this.state.zoom}
                    />

                    <SettingsButton
                        basemap={this.state.basemap}
                        onBasemapChange={this.onBMChange}
                        showStats={this.state.showStats}
                        onToggleStats={this.onToggleStats}
                        cursorColor={this.state.cursorColor}
                        onCursorColorChange={this.onCursorColorChange}
                    />

                    <MyLocationButton />

                </MapContainer>
            </>
        )
    }
}

export default MapComponent;
