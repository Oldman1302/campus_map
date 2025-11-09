const path = require('path');
const { loadCaliforniaGraph } = require('./nodes');
const { test} = require('../test');
const {loadCitiesGraph} = require("../mst/cities");

(async () => {
    const filePath = path.join(__dirname, 'roadNet-CA.txt');
    console.log('Loading California road network from', filePath, '...');

    const graph = await loadCaliforniaGraph(filePath);
    await test(graph, '1');
})();