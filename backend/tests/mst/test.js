const path = require('path');
const { loadCitiesGraph } = require('./cities');
const { test} = require('../test');

(async () => {
    const csvPath = path.join(__dirname, 'MST.csv');
    console.log('Loading graph from', csvPath, '...');

    const graph = await loadCitiesGraph(csvPath);
    await test(graph, 'City1');
})();