const fs = require('fs');
const Graph = require('../../classes/Graph');

/**
 * Loads California road network from roadNet-CA.txt
 * @param {string} filePath - Path to roadNet-CA.txt
 * @returns {Promise<Graph>}
 */
async function loadCaliforniaGraph(filePath){
    const graph = new Graph("California");
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');

    for (const line of lines){
        if (!line || line.startsWith('#')) continue;

        const [from, to] = line.trim().split(/\s+/).map(String);
        if (!from || !to) continue;

        // ensure both nodes exist
        if (!graph.nodes.has(String(from))) {
            await graph.addNode(from, [0, 0], null, false);
        }
        if (!graph.nodes.has(String(to))) {
            await graph.addNode(to, [0, 0], null, false);
        }

        // add edge
        await graph.addEdge(from, to, 1, false);
    }
    return graph
}

module.exports = { loadCaliforniaGraph };