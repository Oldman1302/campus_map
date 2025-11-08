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
    console.log("____________________________________________________");

    let t0 = performance.now();
    await graph.dijkstra(startNode);
    let t1 = performance.now();

    console.log(`Computed shortest paths from ${startNode} to all nodes.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // Bellman-Ford evaluation
    console.log(`\nRunning Bellman-Ford from ${startNode}...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.bellmanFord(startNode);
    t1 = performance.now();

    console.log(`Computed shortest paths from ${startNode} to all nodes.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // Dijkstra for all nodes
    console.log(`\n\nRunning Dijkstra from all nodes...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.dijkstraAll();
    t1 = performance.now();

    console.log(`Computed all-pairs shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // Bellman-Ford for all nodes
    console.log(`\n\nRunning Bellman-Ford from all nodes...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.bellmanFordAll();
    t1 = performance.now();

    console.log(`Computed all-pairs shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // Floyd-Warshall Algorithm for all nodes distance
    console.log(`\n\nRunning Floyd-Warshall Algorithm...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.floydWarshall();
    t1 = performance.now();

    console.log(`Computed all shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // Johnson's Algorithm for all nodes distance
    console.log(`\n\nRunning Johnson's Algorithm...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.johnson();
    t1 = performance.now();

    console.log(`Computed all shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");
}

test("City1").catch(err => console.error(err));
