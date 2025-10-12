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
        this.edges = {}  // the distance between the node and its neighbour
        this.isBuilding = !!isBuilding;  // whether this node represents a building
    }

    /**
     * Add an edge from this node to neighbor with given distance.
     * @param {Node} neighbor
     * @param {number} distance
     */
    async addEdge(neighbor, distance) {
        this.edges.set(neighbor, distance);
    }

    toString() {
        return `Node(${this.name}, coords=${JSON.stringify(this.coordinates)}, isBuilding=${this.isBuilding})`;
    }
}

module.exports = Node;
