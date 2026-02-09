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
    const result = await graph.dijkstra(startNode, "distance");
    let t1 = performance.now();
    console.log(`Computed shortest paths from ${startNode}.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log(result["City500"]);
    console.log("____________________________________________________");

    // --- Bellman-Ford from start ---
    console.log(`\nRunning Bellman-Ford from ${startNode}...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    const result2 = await graph.bellmanFord(startNode, "distance");
    t1 = performance.now();
    console.log(`Computed shortest paths from ${startNode}.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log(result2["City500"]);
    console.log("____________________________________________________");

    // --- Dijkstra all-pairs ---
    console.log(`\nRunning Dijkstra from all nodes...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    const result3 = await graph.dijkstraAll("distance");
    t1 = performance.now();
    console.log(`Computed all-pairs shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log(result3["City1"]["City500"]);
    console.log("____________________________________________________");

    // --- Bellman-Ford all-pairs ---
    console.log(`\nRunning Bellman-Ford from all nodes...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    const result4 = await graph.bellmanFordAll("distance");
    t1 = performance.now();
    console.log(`Computed all-pairs shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log(result4["City1"]["City500"]);
    console.log("____________________________________________________");

    // --- Floyd–Warshall ---
    console.log(`\nRunning Floyd–Warshall Algorithm...`);
    console.log("____________________________________________________");

    t0 = performance.now();
    const result5 = await graph.floydWarshall("distance");
    t1 = performance.now();
    console.log(`Computed all shortest paths.`);
    console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    console.log(result5["City1"]["City500"]);
    console.log("____________________________________________________");

    // // --- Johnson’s Algorithm ---
    // console.log(`\nRunning Johnson’s Algorithm...`);
    // console.log("____________________________________________________");
    //
    // t0 = performance.now();
    // await graph.johnson();
    // t1 = performance.now();
    // console.log(`Computed all shortest paths.`);
    // console.log(`Time complexity: ${(t1 - t0).toFixed(2)} ms`);
    // console.log("____________________________________________________");
}

module.exports = { test };