import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import './Map.css';
import SettingsButton from "./components/Buttons/SettingsButton/SettingsButton";
import MapInfo from "./components/MapInfo/MapInfo";
import MapController from "./components/MapController"; // it's needed for centralization on our map
import {saveBasemap, loadBasemap, saveShowStats, loadShowStats, saveCursorColor, loadCursorColor, saveRouteColor, loadRouteColor} from "./services/storage";
import LocationTracker from "./components/Markers/LocationTracker/LocationTracker";
import CustomMarkers from "./components/Markers/CustomMarkers/CustomMarkers";
import {getUserLocation} from "./services/geolocation";
import MyLocationButton from "./components/Buttons/MyLocationButton/MyLocationButton";
import { fetchMarkers} from "./services/server/markersAPI";
import SearchMarker from "./components/Navigation/SearchMarker/SearchMarker";

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
        routeColor: loadRouteColor(),
        isLocationLoaded: false,  // Track if we've tried to get location
        markers: [],
        isLoadingMarkers: true
    };

    // Get user location and markers once when component mounts
    componentDidMount() {
        this.getUserLocationOnce();
        this.loadAllMarkers();
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

    loadAllMarkers = async () => {
        try {
            const data = await fetchMarkers();
            this.setState({
                markers: data,
                isLoadingMarkers: false
            });
            console.log('All markers loaded:', data.length);
        } catch (error) {
            console.error('Error loading markers:', error);
            this.setState({
                allMarkers: [],
                isLoadingMarkers: false
            });
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

    onRouteColorChange = (color) => {
        this.setState({ routeColor: color });
        saveRouteColor(color);

        // Dispatch event to notify NavigationBuilder
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'map_route_color',
            newValue: color,
            oldValue: this.state.routeColor
        }));
    }

    onCenterChange = (lat, lng) => {
        this.setState({
            centerLat: lat,
            centerLng: lng
        });
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
                    <SearchMarker markers={this.state.markers} isLoading={this.state.isLoadingMarkers} routeColor={this.state.routeColor} />
                    <TileLayer
                        // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={basemapDict[this.state.basemap]}
                        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    <CustomMarkers markers={this.state.markers} />
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
                        routeColor={this.state.routeColor}
                        onRouteColorChange={this.onRouteColorChange}
                    />

                    <MyLocationButton onCenterChange={this.onCenterChange} />

                </MapContainer>
            </>
        )
    }
}

export default MapComponent;
