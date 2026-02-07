class Node {
    /**
     * @param {string} name
     * @param {[number, number]} coordinates  // [lat, lon]
     * @param {Graph|null} subgraph
     * @param {boolean} isBuilding
     */
    constructor(name, coordinates, subgraph= null, isBuilding = false) {
        this.name = name;
        this.coordinates = coordinates;  // (x, y) on the map
        this.subgraph = subgraph;  // embedded graph. In the future, it can maybe be extra navigation inside the buildings
        this.isBuilding = !!isBuilding;  // whether this node represents a building
        this.edges = new Map()  // the distance between the node and its neighbour
    }

    /**
     * Add an edge from this node to neighbor with given distance.
     * @param {Node} neighbor
     * @param {number} distance
     * @param {number} time
     */
    async addEdge(neighbor, distance, time) {
        this.edges.set(neighbor, {
            distance: distance,
            time: time
        });
    }

    /**
     * Remove outgoing edge from this node
     *
     * @param {string|Node} neighbor
     * @returns {Promise<boolean>} true if edge existed and was removed
     */
    async deleteEdge(neighbor) {
        let neighborNode;
        if (typeof neighbor === 'string') {
            for (const node of this.edges.keys()) {
                if (node.name === neighbor) {
                    neighborNode = node;
                    break;
                }
            }
        } else if (neighbor instanceof Node) {
            neighborNode = neighbor;
        } else {
            throw new Error('Node must be string or Node object');
        }

        if (!neighborNode) return false;

        return this.edges.delete(neighborNode);
    }
}

module.exports = Node;
