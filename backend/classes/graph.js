const Node = require('./node');

class Graph {
    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
        this.nodes = new Map();
    }

    /**
     * Add a node to the graph.
     * @param {string} name
     * @param {[number, number]} coordinates
     * @param {Graph|null} subgraph
     * @param {boolean} isBuilding
     */
    async addNode(name, coordinates, subgraph, isBuilding) {
        const node = new Node(name, coordinates, subgraph, isBuilding);
        this.nodes.set(name, node);
        return node
    }

    /**
     * Add an edge by node names. By default, adds bidirectional edge.
     * @param {string} name1
     * @param {string} name2
     * @param {number} distance
     * @param {boolean} bidirectional
     * @returns {Promise<void>}
     */
    async addEdge(name1, name2, distance, bidirectional= true) {
        if (!this.nodes.has(name1) || !this.nodes.has(name2)) {
            throw new Error(`addEdge: one of nodes not found: ${name1}, ${name2}`);
        }
        const node1 = this.nodes.get(name1);
        const node2 = this.nodes.get(name2);
        await node1.addEdge(node2, distance);
        if (bidirectional) {
            await node2.addEdge(node1, distance);
        }
    }

    toString() {
        const lines = [`Graph(${this.name}):`];
        for (const node of this.nodes.values()) {
            const neighbors = [];
            for (const [neighbor, distance] of node.edges.entries()) {
                neighbors.push(`${neighbor.name}: ${distance}`);
            }
            lines.push(`    ${node.name} ${JSON.stringify(node.coordinates)} ${neighbors.length ?  "-> " + neighbors.join(', ').toString() : ""}`)
        }
        return lines.join('\n');
    }

    /**
     * Dijkstra algorithm with path reconstruction.
     * Buildings (node.isBuilding === true) cannot be used as intermediate nodes.
     * Start may be a node name or Node object.
     *
     * Returns a map-like plain object:
     * { nodeName: { distance: Number, path: "A -> B -> C" } }
     *
     * @param {string|Node} start
     * @returns {Promise<Object<string, {distance:number, path:string}>>}
     */
    async dijkstra(start) {
        // Resolve start to Node instance
        let startNode;
        if  (typeof start === 'string') {
            if (!this.nodes.has(start)) throw new Error(`Start node '${start}' not found`);
            startNode = this.nodes.get(start);
        } else if (start instanceof Node) {
            if (!this.nodes.has(start.name) || this.nodes.get(start.name) !== start) throw new Error(`Start node '${start.name}' not found`);
            startNode = start;
        }
        else {
            throw new Error('start must be node name (string) or Node object');
        }

        // Build unvisited set of Node objects
        const unvisited = new Set(this.nodes.values());

        // distances: Map<Node, {distance: number, path: string}>
        // +inf for everyone, 0 for start_node
        const distances = new Map();
        for (const node of unvisited) {
            distances.set(node, { distance: Number.POSITIVE_INFINITY, path: '' });
        }
        distances.set(startNode, {distance: 0.0, path: startNode.name});

        while (unvisited.size > 0) {
            // # Find unvisited node with the smallest tentative distance
            let current = null;
            let minDistance = Number.POSITIVE_INFINITY;
            for (const node of unvisited) {
                let info = distances.get(node) || {distance: Number.POSITIVE_INFINITY};
                if (info.distance < minDistance) {
                    minDistance = info.distance;
                    current = node;
                }
            }

            // If no reachable unvisited node remains - stop the loop
            if (current === null || distances.get(current).distance === Number.POSITIVE_INFINITY) {
                break;
            }

            const currentInfo = distances.get(current);
            const currentDistance = currentInfo.distance;
            const currentPath = currentInfo.path;

            // If current node is a building (not the start), skip expanding neighbors
            if (current.isBuilding && current !== startNode) {
                unvisited.delete(current);
                continue;
            }

            // Update neighbor distances
            for (const [neighbor, weight] of current.edges.entries()) {
                if (!unvisited.has(neighbor)) continue;
                const tentative = currentDistance + weight;
                const neighborInfo = distances.get(neighbor) || { distance: Number.POSITIVE_INFINITY, path: '' };
                if (tentative < neighborInfo.distance) {
                    distances.set(neighbor, { distance: tentative, path: currentPath + ' -> ' + neighbor.name });
                }
            }

            // mark current visited
            unvisited.delete(current);

            // Convert to plain object { nodeName: {distance, path} }
        }
        const result = {};
        for (const [node, info] of distances.entries()) {
            if (node.name === startNode.name) continue;
            // if path is empty and distance is Infinity, we keep path as empty string
            result[node.name] = { distance: info.distance, path: info.path };
        }
        return result;
    }
}

module.exports = Graph;
