/**
 * Parse route parameters from URL
 * @returns {Object} - Parsed route parameters { from, to, strategy }
 */
export const parseRouteParams = () => {
    const params = new URLSearchParams(window.location.search);

    let strategy = params.get('strategy') || 'time';

    return {
        from: params.get('from') || null,
        to: params.get('to') || null,
        strategy: (strategy !== 'time' && strategy !== 'distance') ? 'time' : strategy
    };
};

/**
 * Build URL with route parameters
 * @param {Object} params - Route parameters { from, to, strategy }
 * @returns {string} - Full URL with parameters
 */
export const buildRouteUrl = (params) => {
    const { from, to, strategy = 'time' } = params;

    let url = '';

    if (from) url += `from=${from}&`;
    if (to) url += `to=${to}&`;
    if (strategy) url += `strategy=${strategy}`;

    return url ? `${window.location.pathname}?${url}` : window.location.pathname;
};

/**
 * Update URL without reloading the page
 * @param {Object} params - Route parameters { from, to, strategy }
 */
export const updateUrlParams = (params) => {
    const url = buildRouteUrl(params);
    window.history.pushState({}, '', url);
};

/**
 * Clear all route parameters from URL
 */
export const clearUrlParams = () => {
    window.history.pushState({}, '', window.location.pathname);
};