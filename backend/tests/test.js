const {performance} = require('perf_hooks');

/**
 * Universal test for all shortest-path algorithms.
 * Runs all algorithms on the provided graph.
 *
 * @param {Graph} graph
 * @param {string|Node} startNode
 * @returns {Promise<void>}
 */
async function test(graph, startNode) {
    console.log(`\nLoaded graph: ${graph.name} (${graph.nodes.size} nodes)`);

    // --- Dijkstra from start ---
    console.log(`\nRunning Dijkstra from ${startNode}...`);
    console.log("____________________________________________________");

    let t0 = performance.now();
    await graph.dijkstra(startNode);
    let t1 = performance.now();
    console.log(`Computed shortest paths from ${startNode}.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // --- Bellman-Ford from start ---
    console.log(`\nRunning Bellman-Ford from ${startNode}...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.bellmanFord(startNode);
    t1 = performance.now();
    console.log(`Computed shortest paths from ${startNode}.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // --- Dijkstra all-pairs ---
    console.log(`\nRunning Dijkstra from all nodes...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.dijkstraAll();
    t1 = performance.now();
    console.log(`Computed all-pairs shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // --- Bellman-Ford all-pairs ---
    console.log(`\nRunning Bellman-Ford from all nodes...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.bellmanFordAll();
    t1 = performance.now();
    console.log(`Computed all-pairs shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // --- Floyd–Warshall ---
    console.log(`\nRunning Floyd–Warshall Algorithm...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.floydWarshall();
    t1 = performance.now();
    console.log(`Computed all shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");

    // --- Johnson’s Algorithm ---
    console.log(`\nRunning Johnson’s Algorithm...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    await graph.johnson();
    t1 = performance.now();
    console.log(`Computed all shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log("____________________________________________________");
}

module.exports = { test };