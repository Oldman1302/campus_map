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
    async addEdge(name1, name2, distance, bidirectional = true) {
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

        // Format result
        const result = {};
        for (const [node, info] of distances.entries()) {
            if (node.name === startNode.name) continue;
            // if path is empty and distance is Infinity, we keep path as empty string
            result[node.name] = { distance: info.distance, path: info.path };
        }
        return result;
    }

    /**
     * Base Bellman–Ford core used by both bellmanFord()
     *
     * @param {string|Node} start - Start node name or Node instance
     * @param {Map<string, Node>|null} customNodes - Optional: custom node map (for Johnson’s extended graph)
     * @returns {Promise<{ distances: Object<string, number>, predecessors: Object<string, string|null> }>}
     */
    async #bellmanFordBase(start, customNodes = null) {
        // Resolve start node
        let startNode;
        const nodeMap = customNodes || this.nodes;
        if (typeof start === 'string') {
            if (!nodeMap.has(start)) throw new Error(`Start node '${start}' not found`);
            startNode = nodeMap.get(start);
        } else if (start instanceof Node) {
            if (!nodeMap.has(start.name)) throw new Error(`Start node '${start.name}' not found`);
            startNode = start;
        } else {
            throw new Error('startNode must be a string or Node object');
        }

        const nodeList = Array.from(nodeMap.values());
        const nodeNames = Array.from(nodeMap.keys());

        // Initialize distances and predecessors
        const distances = {};
        const predecessors = {};

        for (const name of nodeNames) {
            distances[name] = Number.POSITIVE_INFINITY;
            predecessors[name] = null;
        }
        distances[startNode.name] = 0;

        for (let i = 0; i < nodeList.length - 1; i++) {
            let updated = false;
            for (const [uName, uNode] of nodeMap.entries()) {
                // If current node is a building (not the start), skip expanding neighbors
                if (uNode.isBuilding && uName !== startNode.name) continue;

                for (const [vNode, distance] of uNode.edges.entries()) {
                    const vName = vNode.name;
                    if (distances[uName] + distance < distances[vName]){
                        distances[vName] = distances[uName] + distance;
                        predecessors[vName] = uName;
                        updated = true;
                    }
                }
            }
            if (!updated) break; // optimization: stop early
        }
        return { distances, predecessors };
    }

    /**
     * Bellman–Ford algorithm with path reconstruction.
     * Supports negative edge weights.
     * Returns: { nodeName: { distance: number, path: string } }
     *
     * @param {string|Node} start
     * @returns {Promise<Object<string, {distance:number, path:string}>>}
     */
    // In the future: you can add handler for negative edges
    async bellmanFord(start) {
        const { distances, predecessors } = await this.#bellmanFordBase(start);

        // Reconstruct paths
        function buildPath(to) {
            if (distances[to] === Number.POSITIVE_INFINITY) return [];
            const path = [];
            let curr = to;
            while (curr !== null) {
                path.unshift(curr);
                curr = predecessors[curr];
            }
            return path;
        }

        // Format result
        const result = {};
        for (const [name, distance] of Object.entries(distances)) {
            if (name === (typeof start === 'string' ? start : start.name)) continue;
            result[name] = {
                distance: distance,
                path: buildPath(name).join(' -> ')
            };
        }

        return result;
    }

    /**
     * Compute the shortest paths from every node using Dijkstra.
     * Returns: { fromNodeName: { toNodeName: {distance, path} } }
     */
    async dijkstraAll() {
        const results = {};
        const nodeNames = Array.from(this.nodes.keys());

        for (const name of nodeNames) {
            results[name] = await this.dijkstra(name);
        }

        return results;
    }

    /**
     * Compute the shortest paths from every node using Bellman-Ford.
     * Returns: { fromNodeName: { toNodeName: {distance, path} } }
     */
    async bellmanFordAll() {
        const results = {};
        const nodeNames = Array.from(this.nodes.keys());

        for (const name of nodeNames) {
            results[name] = await this.bellmanFord(name);
        }

        return results;
    }

    /**
     *  * Floyd–Warshall algorithm for all-pairs shortest paths.
     * Returns object { fromNodeName: { toNodeName: {distance, path} } }
     */
    async floydWarshall() {
        const nodeNames = Array.from(this.nodes.keys());

        // Initialize distance and next distance matrices
        const dist = {};
        const nextHop = {};

        for (const nodeI of nodeNames) {
            dist[nodeI] = {};
            nextHop[nodeI] = {};
            for (const nodeJ of nodeNames) {
                if (nodeI === nodeJ) dist[nodeI][nodeJ] = 0;
                else dist[nodeI][nodeJ] = Number.POSITIVE_INFINITY;
                nextHop[nodeI][nodeJ] = null;
            }
        }

        // Fill distances from edges
        for (const [name, node] of this.nodes.entries()) {
            for (const [neighbor, weight] of node.edges.entries()) {
                dist[name][neighbor.name] = weight;
                nextHop[name][neighbor.name] = neighbor.name;
            }
        }

        // Main triple loop
        for (const nodeK of nodeNames) {
            // If current node is a building (not the start), skip expanding neighbors
            const nodeObj = this.nodes.get(nodeK);
            if (nodeObj.isBuilding) continue;

            for (const nodeI of nodeNames) {
                for (const nodeJ of nodeNames) {
                    if (dist[nodeI][nodeK] + dist[nodeK][nodeJ] < dist[nodeI][nodeJ]){
                        dist[nodeI][nodeJ] = dist[nodeI][nodeK] + dist[nodeK][nodeJ];
                        nextHop[nodeI][nodeJ] = nextHop[nodeI][nodeK];
                    }
                }
            }
        }

        // Reconstruct paths
        function buildPath(i, j) {
            if (nextHop[i][j] === null) return [];
            const path = [i];
            while (i !== j) {
                i = nextHop[i][j];
                path.push(i);
            }
            return path;
        }

        // Format result
        const result = {};
        for (const nodeI of nodeNames) {
            result[nodeI] = {};
            for (const nodeJ of nodeNames) {
                if (nodeI === nodeJ) continue;
                const pathArr = buildPath(nodeI, nodeJ);
                const pathStr = pathArr.length ? pathArr.join(" -> ") : "";
                result[nodeI][nodeJ] = {
                    distance: dist[nodeI][nodeJ],
                    path: pathStr
                }
            }
        }

        return result;
    }

    /**
     * Johnson's Algorithm for all-pairs shortest paths.
     * Efficient for sparse graphs and supports negative edge weights
     * @returns {Promise<Object<string, Object<string, {distance:number, path:string}>>>}
     */
    async johnson() {
        // Add temporary node S connected to all nodes with 0-weight edges
        const S = new Node('S', [0, 0], null, false)
        for (const node of this.nodes.values()) await S.addEdge(node, 0)

        // Build extended graph (copy)
        const extended = new Map(this.nodes);
        extended.set(S.name, S);

        // run Bellman–Ford from S to get potential h
        const { distances: h } = await this.#bellmanFordBase('S', extended);

        // Check for negative-weight cycles
        for (const [uName, uNode] of extended.entries()) {
            for (const [vNode, weight] of uNode.edges.entries()) {
                if (h[uName] + weight < h[vNode.name]) {
                    throw new Error('Graph contains a negative-weight cycle');
                }
            }
        }

        // reweight edges to eliminate negatives
        const reweighted = new Map();
        for (const [name, node] of this.nodes.entries()) {
            const newNode = new Node(name, node.coordinates, node.subgraph, node.isBuilding);
            for (const [neighbor, weight] of node.edges.entries()) {
                const newWeight = weight + h[name] - h[neighbor.name];
                await newNode.addEdge(neighbor, newWeight);
            }
            reweighted.set(name, newNode);
        }

        // run Dijkstra from each node
        const result = {};
        for (const [uName, uNode] of reweighted.entries()) {
            // Skip buildings as starting points
            if (uNode.isBuilding) continue;

            const dijkstraResult = await this.dijkstra(uName);

            result[uName] = {};
            for (const [vName, { distance, path }] of Object.entries(dijkstraResult)) {
                const realDist = distance + h[vName] - h[uName];
                result[uName][vName] = {
                    distance: realDist,
                    path
                };
            }
        }
        return result;
    }
}

module.exports = Graph;
