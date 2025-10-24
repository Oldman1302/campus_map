const path = require('path');
const { loadCitiesGraph } = require('./cities');
const {performance} = require('perf_hooks');

/**
 @param {string|Node} startNode
 */
async function test(startNode) {
    const csvPath = path.join(__dirname, 'MST.csv');
    console.log('Loading graph from ', csvPath, "...");

    const graph = await loadCitiesGraph(csvPath);
    console.log(`\nLoaded graph with ${graph.nodes.size} nodes`);

    // Dijkstra evaluation
    console.log(`\nRunning Dijkstra from ${startNode}...`);
    console.log("____________________________________________________")

    const t0 = performance.now();
    await graph.dijkstra(startNode);
    const t1 = performance.now();

    console.log(`Computed shortest paths from ${startNode} to all nodes.`)
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________")
}

test("City1").catch(err => console.error(err));
