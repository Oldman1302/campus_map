// Storage keys
const STORAGE_KEYS = {
    BASEMAP: 'map_basemap',
    SHOW_STATS: 'map_show_stats',
    CURSOR_COLOR: 'map_cursor_color'
};

// Default settings
const DEFAULTS = {
    basemap: 'osm',
    showStats: false,
    cursorColor: '#4f46e5'
};

// Save basemap preference
export function saveBasemap(basemap) {
    try {
        localStorage.setItem(STORAGE_KEYS.BASEMAP, basemap);
    } catch (error) {
        console.error('Failed to save basemap:', error);
    }
}

// Load basemap preference
export function loadBasemap() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.BASEMAP);
        return saved || DEFAULTS.basemap;
    } catch (error) {
        console.error('Failed to load basemap:', error);
        return DEFAULTS.basemap;
    }
}

// Save show stats preference
export function saveShowStats(showStats) {
    try {
        localStorage.setItem(STORAGE_KEYS.SHOW_STATS, showStats);
    } catch (error) {
        console.error('Failed to save showStats:', error);
    }
}

export function loadShowStats() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.SHOW_STATS);
        // if (saved === null) {
        //     return DEFAULTS.showStats;  // Return boolean false
        // }
        // // Parse the saved string to boolean
        return JSON.parse(saved) || DEFAULTS.showStats;
    } catch (error) {
        console.error('Failed to load showStats:', error);
    }
}

// Save cursor color preference
export function saveCursorColor(color) {
    try {
        localStorage.setItem(STORAGE_KEYS.CURSOR_COLOR, color);
    } catch (error) {
        console.error('Failed to save cursor color:', error);
    }
}

// Load cursor color preference
export function loadCursorColor() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.CURSOR_COLOR);
        return saved || DEFAULTS.cursorColor;
    } catch (error) {
        console.error('Failed to load cursor color:', error);
        return DEFAULTS.cursorColor;
    }
}
