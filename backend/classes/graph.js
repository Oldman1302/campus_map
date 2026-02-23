const Node = require('./node');

class Graph {
    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
        this.nodes = new Map();
        // this.weightStrategy = edge => edge.distance;
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
     * @param {number} time
     * @param {boolean} bidirectional
     * @returns {Promise<void>}
     */
    async addEdge(name1, name2, distance, time, bidirectional = true) {
        if (!this.nodes.has(name1) || !this.nodes.has(name2)) {
            throw new Error(`addEdge: one of nodes not found: ${name1}, ${name2}`);
        }
        const node1 = this.nodes.get(name1);
        const node2 = this.nodes.get(name2);
        await node1.addEdge(node2, distance, time);
        if (bidirectional) {
            await node2.addEdge(node1, distance, time);
        }
    }

    /**
     * Delete an edge from the graph
     *
     *  * @param {string|Node} from
     *  * @param {string|Node} to
     *  * @returns {Promise<boolean>} true if edge existed and was removed
     */
    async deleteEdge(from, to) {
        let fromNode;

        if (typeof from === 'string') {
            fromNode = this.nodes.get(from);
        } else if (from instanceof Node) {
            fromNode = from;
        } else {
            throw new Error('Node must be string or Node object');
        }

        return await fromNode.deleteEdge(to);
    }

    /**
     * Delete a node from the graph by its name (and all edges connected to it)

     * @param {string} target
     * @returns {Promise<boolean>} true if node existed and was removed
     */
    async deleteNode(target) {
        let node;

        if (typeof target === 'string') {
            node = this.nodes.get(target);
        } else if (target instanceof Node) {
            node = target;
        } else {
            throw new Error('Node must be string or Node object');
        }

        for (const n of this.nodes.values()) {
            await n.deleteEdge(node);
        }

        node.edges.clear();

        return this.nodes.delete(node.name);
    }

    // /**
    //  * Set weight calculation strategy
    //  *
    //  * @param {(edge: {distance:number, time:number}) => number} strategy
    //  */
    // setWeightStrategy(strategy) {
    //     this.weightStrategy = strategy;
    // }

    toString() {
        const lines = [`Graph(${this.name}):`];
        for (const node of this.nodes.values()) {
            const neighbors = [];
            for (const [neighbor, data] of node.edges.entries()) {
                neighbors.push(`${neighbor.name}: distance = ${data.distance}, time  = ${data.time}`);
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
     * @param {string} weightStrategy
     * @param {Map<string, Node>|null} customNodes - if it's needed to use different graph we use customNodes
     * @returns {Promise<Object<string, {distance:number, path:string}>>}
     */
    async dijkstra(start, weightStrategy, customNodes = null) {
        const nodeMap = customNodes || this.nodes;

        // Resolve start to Node instance
        let startNode;
        if  (typeof start === 'string') {
            if (!nodeMap.has(start)) throw new Error(`Start node '${start}' not found`);
            startNode = nodeMap.get(start);
        } else if (start instanceof Node) {
            if (!nodeMap.has(start.name) || nodeMap.get(start.name) !== start) throw new Error(`Start node '${start.name}' not found`);
            startNode = start;
        }
        else {
            throw new Error('start must be node name (string) or Node object');
        }

        // Build unvisited set of Node objects
        const unvisited = new Set(nodeMap.values());

        // distances: Map<Node, {primary: number, secondary: number, path: string}>
        // +inf for everyone, 0 for start_node
        const distances = new Map();
        for (const node of unvisited) {
            distances.set(node, {
                primary: Number.POSITIVE_INFINITY,
                secondary: Number.POSITIVE_INFINITY,
                path: ''
            });
        }

        distances.set(startNode, {
            primary: 0.0,
            secondary: 0.0,
            path: startNode.name
        });

        const secondWeightStrategy = weightStrategy === "distance" ? "time" : "distance";

        while (unvisited.size > 0) {
            // Find unvisited node with the smallest tentative distance
            let current = null;
            let minPrimary = Number.POSITIVE_INFINITY;
            for (const node of unvisited) {
                let info = distances.get(node) || {distance: Number.POSITIVE_INFINITY};
                if (info.primary < minPrimary) {
                    minPrimary = info.primary;
                    current = node;
                }
            }

            // If no reachable unvisited node remains - stop the loop
            if (current === null || distances.get(current).primary === Number.POSITIVE_INFINITY) {
                break;
            }

            const currentInfo = distances.get(current);
            const currentPrimary = currentInfo.primary;
            const currentSecondary = currentInfo.secondary;
            const currentPath = currentInfo.path;

            // If current node is a building (not the start), skip expanding neighbors
            if (current.isBuilding && current !== startNode) {
                unvisited.delete(current);
                continue;
            }

            // Update neighbor distances
            for (const [neighbor, edgeData] of current.edges.entries()) {
                if (!unvisited.has(neighbor)) continue;

                const primaryWeight =  edgeData[weightStrategy];
                const secondaryWeight = edgeData[secondWeightStrategy];

                const tentativePrimary = currentPrimary + primaryWeight;
                const tentativeSecondary = currentSecondary + secondaryWeight;

                const neighborInfo = distances.get(neighbor);

                if (tentativePrimary < neighborInfo.primary) {
                    distances.set(neighbor, {
                        primary: tentativePrimary,
                        secondary: tentativeSecondary,
                        path: currentPath + ' -> ' + neighbor.name
                    });
                }
            }

            // mark current visited
            unvisited.delete(current);
        }


        // Format result
        const result = {};
        for (const [node, info] of distances.entries()) {
            if (node.name === startNode.name) continue;
            // if path is empty and distance is Infinity, we keep path as empty string
            result[node.name] = {
                [weightStrategy]: info.primary || 0,
                [secondWeightStrategy]: info.secondary || 0,
                path: info.path
            };
        }

        return result;
    }

    /**
     * Base Bellman–Ford core used by both bellmanFord() and johnson()
     *
     * @param {string|Node} start - Start node name or Node instance
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * @param {Map<string, Node>|null} customNodes - Optional: custom node map (for Johnson’s extended graph)
     * @returns {Promise<{ distancesPrimary: Object<string, number>, distancesSecondary: Object<string, number>, predecessors: Object<string, string|null> }>}
     */
    async #bellmanFordBase(start, weightStrategy, customNodes = null) {
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
        const distancesPrimary = {};
        const distancesSecondary = {};
        const predecessors = {};

        for (const name of nodeNames) {
            distancesPrimary[name] = Number.POSITIVE_INFINITY;
            distancesSecondary[name] = Number.POSITIVE_INFINITY;
            predecessors[name] = null;
        }

        distancesPrimary[startNode.name] = 0;
        distancesSecondary[startNode.name] = 0;

        const useDistance = weightStrategy === 'distance';

        for (let i = 0; i < nodeList.length - 1; i++) {
            let updated = false;

            for (const [uName, uNode] of nodeMap.entries()) {
                // If current node is a building (not the start), skip expanding neighbors
                if (uNode.isBuilding && uName !== startNode.name) continue;

                for (const [vNode, edgeData] of uNode.edges.entries()) {
                    const vName = vNode.name;

                    const primaryWeight = useDistance ? edgeData.distance : edgeData.time;
                    const secondaryWeight = useDistance ? edgeData.time : edgeData.distance;

                    if (distancesPrimary[uName] + primaryWeight < distancesPrimary[vName]) {
                        distancesPrimary[vName] = distancesPrimary[uName] + primaryWeight;
                        distancesSecondary[vName] = distancesSecondary[uName] + secondaryWeight;
                        predecessors[vName] = uName;
                        updated = true;
                    }
                }
            }
            if (!updated) break; // optimization: stop early
        }
        return { distancesPrimary, distancesSecondary, predecessors };
    }

    /**
     * Bellman–Ford algorithm with path reconstruction.
     * Supports negative edge weights.
     * Returns: { nodeName: { distance: number, time: number, path: string } }
     *
     * @param {string|Node} start
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * @returns {Promise<Object<string, {distance:number, time: number, path:string}>>}
     */
    // In the future: you can add handler for negative edges
    async bellmanFord(start, weightStrategy) {
        const {
            distancesPrimary,
            distancesSecondary, predecessors
        } = await this.#bellmanFordBase(start, weightStrategy);

        const useDistance = weightStrategy === 'distance';

        // Reconstruct paths
        function buildPath(to) {
            if (distancesPrimary[to] === Number.POSITIVE_INFINITY) return [];
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
        for (const name of Object.keys(distancesPrimary)) {
            if (name === (typeof start === 'string' ? start : start.name)) continue;
            result[name] = {
                distance: useDistance
                    ? distancesPrimary[name]
                    : distancesSecondary[name],
                time: useDistance
                    ? distancesSecondary[name]
                    : distancesPrimary[name],
                path: buildPath(name).join(' -> ')
            };
        }

        return result;
    }

    /**
     * Compute the shortest paths from every node using Dijkstra.
     *
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * Returns: { fromNodeName: { toNodeName: {distance: number, time: number, path: string} } }
     */
    async dijkstraAll(weightStrategy) {
        const results = {};
        const nodeNames = Array.from(this.nodes.keys());

        for (const name of nodeNames) {
            results[name] = await this.dijkstra(name, weightStrategy);
        }

        return results;
    }

    /**
     * Compute the shortest paths from every node using Bellman-Ford.
     *
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * Returns: { fromNodeName: { toNodeName: {distance: number, time: number, path: string} } }
     */
    async bellmanFordAll(weightStrategy) {
        const results = {};
        const nodeNames = Array.from(this.nodes.keys());

        for (const name of nodeNames) {
            results[name] = await this.bellmanFord(name, weightStrategy);
        }

        return results;
    }

    /**
     * Floyd–Warshall algorithm for all-pairs shortest paths.
     *
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * Returns object { fromNodeName: { toNodeName: {distance: number, time: number, path: string} } }
     */
    async floydWarshall(weightStrategy) {
        const nodeNames = Array.from(this.nodes.keys());

        // Initialize matrices
        const primary = {};
        const secondary = {};
        const nextHop = {};

        for (const nodeI of nodeNames) {
            primary[nodeI] = {};
            secondary[nodeI] = {};
            nextHop[nodeI] = {};
            for (const nodeJ of nodeNames) {
                if (nodeI === nodeJ) {
                    primary[nodeI][nodeJ] = 0;
                    secondary[nodeI][nodeJ] = 0;
                }
                else {
                    primary[nodeI][nodeJ] = Number.POSITIVE_INFINITY;
                    secondary[nodeI][nodeJ] = Number.POSITIVE_INFINITY;
                }
                nextHop[nodeI][nodeJ] = null;
            }
        }

        // Fill matrices from edges
        for (const [name, node] of this.nodes.entries()) {
            for (const [neighbor, edgeData] of node.edges.entries()) {
                primary[name][neighbor.name] = edgeData[weightStrategy];
                secondary[name][neighbor.name] = weightStrategy === 'distance'
                    ? edgeData.time
                    : edgeData.distance;
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
                    if (primary[nodeI][nodeK] + primary[nodeK][nodeJ] < primary[nodeI][nodeJ]){
                        primary[nodeI][nodeJ] = primary[nodeI][nodeK] + primary[nodeK][nodeJ];
                        secondary[nodeI][nodeJ] = secondary[nodeI][nodeK] + secondary[nodeK][nodeJ];
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
                    distance: weightStrategy === "distance"
                    ? primary[nodeI][nodeJ]
                    : secondary[nodeI][nodeJ],
                    time: weightStrategy === "distance"
                        ? secondary[nodeI][nodeJ]
                        : primary[nodeI][nodeJ],
                    path: pathStr
                }
            }
        }

        return result;
    }

    /**
     * Johnson's Algorithm for all-pairs shortest paths.
     * Efficient for sparse graphs and supports negative edge weights
     *
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * @returns {Promise<Object<string, Object<string, {distance:number, path:string}>>>}
     */
    async johnson(weightStrategy) {
        // Add temporary node S connected to all nodes with 0-weight edges
        const S = new Node('S', [0, 0], null, false)
        for (const node of this.nodes.values()) await S.addEdge(node, 0, 0)

        // Build extended graph (copy)
        const extended = new Map(this.nodes);
        extended.set(S.name, S);

        // run Bellman–Ford from S to get potential h
        const { distancesPrimary: h } = await this.#bellmanFordBase('S', weightStrategy, extended);


        // Check for negative-weight cycles
        for (const [uName, uNode] of extended.entries()) {
            if (h[uName] === undefined) continue;
            for (const [vNode, edgeData] of uNode.edges.entries()) {
                if (h[uName] + edgeData[weightStrategy] < h[vNode.name]) {
                    throw new Error('Graph contains a negative-weight cycle');
                }
            }
        }

        // reweight edges to eliminate negatives
        const reweighted = new Map();

        for (const [name, node] of this.nodes.entries()) {
            reweighted.set(
                name,
                new Node(name, node.coordinates, node.subgraph, node.isBuilding)
            );
        }

        for (const [name, node] of this.nodes.entries()) {
            const newNode = reweighted.get(name);

            for (const [neighbor, edgeData] of node.edges.entries()) {
                const newWeight = edgeData[weightStrategy] + h[name] - h[neighbor.name];

                const newDistance = weightStrategy === 'distance'
                    ? newWeight
                    : edgeData.distance;

                const newTime = weightStrategy === 'distance'
                    ? edgeData.time
                    : newWeight;

                const newNeighbor = reweighted.get(neighbor.name);

                await newNode.addEdge(newNeighbor, newDistance, newTime);
            }
        }

        // run Dijkstra from each node
        const result = {};
        for (const [uName] of reweighted.entries()) {
            const dijkstraResult = await this.dijkstra(uName, weightStrategy, reweighted);

            result[uName] = {};
            for (const [vName, { distance, time, path }] of Object.entries(dijkstraResult)) {
                const correctedPrimary = (weightStrategy === 'distance'
                        ? distance
                        : time)
                    + h[vName] - h[uName];

                result[uName][vName] = {
                    distance: weightStrategy === 'distance'
                        ? correctedPrimary
                        : distance,
                    time: weightStrategy === 'distance'
                        ? time
                        : correctedPrimary,
                    path
                };
            }
        }
        return result;
    }

    /**
     * A* search algorithm (single-source -> single-target).
     *
     * @param {string|Node} start
     * @param {string|Node} goal
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * @returns {{distance: number, time: number, path: string}}
     */
    aStar(start, goal,weightStrategy) {
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

        // Resolve goal node to Node instance
        let goalNode
        if  (typeof goal === 'string') {
            if (!this.nodes.has(goal)) throw new Error(`Goal node '${goal}' not found`);
            goalNode = this.nodes.get(goal);
        } else if (goal instanceof Node) {
            if (!this.nodes.has(goal.name) || this.nodes.get(goal.name) !== goal) throw new Error(`Goal node '${goal.name}' not found`);
            goalNode = goal;
        }
        else {
            throw new Error('goal must be node name (string) or Node object');
        }

        const secondWeightStrategy = weightStrategy === "distance" ? "time" : "distance";

        // Heuristic function (Euclidean distance)
        const heuristic = (node) => {
            if (!node.coordinates || !goalNode.coordinates) return 0;

            const [x1, y1] = node.coordinates;
            const [x2, y2] = goalNode.coordinates;

            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        };

        // Data structures
        const openSet = new Set([startNode]);

        // gScore = real cost from start to node
        const gScore = new Map();
        // fScore = g + heuristic
        const fScore = new Map();
        // secondary metric tracking
        const secondaryScore = new Map();
        // path tracking
        const pathMap = new Map();

        // Initialization
        for (const node of this.nodes.values()) {
            gScore.set(node, Infinity);
            fScore.set(node, Infinity);
            secondaryScore.set(node, Infinity);
            pathMap.set(node, "");
        }

        gScore.set(startNode, 0);
        secondaryScore.set(startNode, 0);
        fScore.set(startNode, heuristic(startNode));
        pathMap.set(startNode, startNode.name);

        while (openSet.size > 0) {
            // Find node in openSet with lowest fScore
            let current = null;
            let minF = Infinity;

            for (const node of openSet) {
                const score = fScore.get(node);
                if (score < minF) {
                    minF = score;
                    current = node;
                }
            }

            // If goal reached, reconstruct result
            if (current === goalNode) {
                return {
                    distance: weightStrategy === 'distance'
                    ? gScore.get(current)
                    : secondaryScore.get(current),
                    time: weightStrategy === 'time'
                    ? gScore.get(current)
                    : secondaryScore.get(current),
                    path: pathMap.get(current)
                };
            }

            openSet.delete(current);

            if (current.isBuilding && current !== startNode && current !== goalNode) continue;

            // Explore neighbors
            for (const [neighbor, edgeData] of current.edges.entries()) {
                const primaryWeight = edgeData[weightStrategy];
                const secondaryWeight = edgeData[secondWeightStrategy];

                const testG = gScore.get(current) + primaryWeight;

                if (testG < gScore.get(neighbor)) {
                    gScore.set(neighbor, testG);
                    secondaryScore.set(
                        neighbor,
                        secondaryScore.get(current) + secondaryWeight
                    );

                    fScore.set(
                        neighbor,
                        testG + heuristic(neighbor)
                    );

                    pathMap.set(
                        neighbor,
                        pathMap.get(current) + " -> " + neighbor.name
                    );

                    openSet.add(neighbor);
                }
            }
        }

        // If goal not reachable
        return {
            distance: Infinity,
            time: Infinity,
            path: ""
        };
    }

    /**
     * Compute the shortest paths from every node using A*.
     *
     * @param {string} weightStrategy - the strategy of "the best path" can be either by distance or by time
     * Returns: { fromNodeName: { toNodeName: {distance: number, time: number, path: string} } }
     */
    aStarAll(weightStrategy) {
        const result = {};

        const nodesArray = Array.from(this.nodes.values());

        for (const startNode of nodesArray) {
            result[startNode.name] = {};

            for (const goalNode of nodesArray) {
                if (startNode === goalNode) {
                    result[startNode.name][goalNode.name] = {distance: 0, time: 0, path: startNode.name};
                    continue;
                }

                // Run A* for this pair
                result[startNode.name][goalNode.name] = this.aStar(startNode, goalNode, weightStrategy);
            }
        }

        return result;
    }

    /**
     * Ultra-fast planar distance in meters.
     *
     * @param {[number, number]} coordinate1
     * @param {[number, number]} coordinate2
     * @returns {number}
     */
    _euclidDistance(coordinate1, coordinate2) {
        const METERS_PER_DEGREE_LAT = 111320;
        const METERS_PER_DEGREE_LON = 102971; // fixed for 22.365° latitude

        const dLat = (coordinate2[0] - coordinate1[0]) * METERS_PER_DEGREE_LAT;
        const dLon = (coordinate2[1] - coordinate1[1]) * METERS_PER_DEGREE_LON;

        return Math.sqrt(dLat * dLat + dLon * dLon);
    }

    /**
    * Finds the closest node in graph to given coordinates.
    *
    * @param {[number, number]} coordinates
    * @returns {{name: string | null, distance: number}}
    */
    findClosestNode(coordinates) {
        let closestNode = null;
        let minDistance = Infinity;

        for (const [nodeName, node] of this.nodes.entries()) {
            const distance = this._euclidDistance(coordinates, node.coordinates);

            if (distance < minDistance) {
                minDistance = distance;
                closestNode = nodeName;
            }
        }

        return {name: closestNode, distance: minDistance};
    }
}

module.exports = Graph;
