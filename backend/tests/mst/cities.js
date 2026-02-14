const fs = require('fs');
const Graph = require('../../classes/Graph');

/**
 * Reads CSV with edges: from,to,distance
 * and constructs a directed Graph.
 * @param {string} csvPath
 * @returns {Promise<Graph>}
*/
async function loadCitiesGraph(csvPath) {
    const graph = new Graph('Cities');
    const data = fs.readFileSync(csvPath, 'utf8');
    const lines = data.trim().split('\n');

    // Skip header line (assuming first line = "From,To,Distance")
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue; // skip empty lines

        const [from, to, distanceStr] = line.split(',');
        const distance = parseFloat(distanceStr);

        if (!from || !to || isNaN(distance)) {
            console.warn(`Skipping invalid line: ${line}`);
            continue;
        }

        // ensure both nodes exist
        if (!graph.nodes.has(from)) {
            await graph.addNode(from, [0, 0], null, false);
        }
        if (!graph.nodes.has(to)) {
            await graph.addNode(to, [0, 0], null, false);
        }

        // add directed edge
        await graph.addEdge(from, to, distance, 1, false);
    }

    return graph;
}

module.exports = { loadCitiesGraph };
