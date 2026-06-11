const express = require("express");
const {loadCampusGraph} = require("../data/campus");
const {performance} = require('perf_hooks');
const cors = require("cors");

/**
 * Starts the HTTP server.
 * @param {number} port
 */
async function startServer(port) {
    console.log("Loading campus graph...");
    let t0 = performance.now();

    const graph = await loadCampusGraph();

    console.log("Loading nodes...");
    const nodes = graph.getAllNodes();
    console.log(`Loaded ${nodes.length} nodes`);

    console.log("Precomputing shortest paths (distance)...");
    const routesByDistance = await graph.dijkstraAll("distance");

    console.log("Precomputing shortest paths (time)...");
    const routesByTime = await graph.dijkstraAll("time");

    let t1 = performance.now();

    console.log(`Precomputation complete (${((t1 - t0) / 1000).toFixed(4)}s).\n`);

    const app = express();
    app.use(cors());


    /**
     * GET-request to obtain the route from node A to node B according to specific strategy (distance or time)
     *
     * GET /route?from=A&to=B&strategy=distance|time
     */
    app.get("/route", (req, res) => {
        const { from, to, strategy = "distance" } = req.query;

        // function for coordinate validation
        const validateCoordinates = (coordinate) => {
            if (!coordinate || typeof coordinate !== 'string') {
                return null;
            }

            const parts = coordinate.split(',');
            if (parts.length !== 2) {
                return null;
            }

            // parse numbers
            const lat = parseFloat(parts[0].trim());
            const lng = parseFloat(parts[1].trim());

            // Check numbers
            if (isNaN(lat) || isNaN(lng)) {
                return null;
            }

            if (lat < 22 || lat > 23 || lng < 113 || lng > 114) {
                return null;
            }

            return [lat, lng];
        };

        const getClosestNodeWithDistance = (coordinate) => {
            const coordinates = validateCoordinates(coordinate);
            if (!coordinates) {
                return null;
            }

            return graph.findClosestNode(coordinates);
        };

        if (!from || !to) {
            return res.status(400).json({
                error: "Parameters 'from' and 'to' are required"
            });
        }

        if (strategy !== "distance" && strategy !== "time") {
            return res.status(400).json({
                error: "Strategy must be either 'distance' or 'time'"
            });
        }

        const routes = strategy === "distance"
            ? routesByDistance
            : routesByTime;

        // Starting point
        let fromNode = from;
        let fromExtraDistance = 0;
        let fromPath = null;

        if (!routes[from]) {
            const closest = getClosestNodeWithDistance(from);
            if (closest) {
                fromNode = closest.name;
                fromExtraDistance = closest.distance;
                fromPath = from;
            } else {
                return res.status(400).json({
                    error: "Invalid 'from' parameter: neither a valid node name nor valid coordinates"
                });
            }
        }

        // Destination point
        let toNode = to;
        let toExtraDistance = 0;
        let toPath = null;

        if (!routes[to]) {
            const closest = getClosestNodeWithDistance(to);
            if (closest) {
                toNode = closest.name;
                toExtraDistance = closest.distance;
                toPath = to;
            } else {
                return res.status(400).json({
                    error: "Invalid 'to' parameter: neither a valid node name nor valid coordinates"
                });
            }
        }

        // Check if route exists between the found nodes
        if (!routes[fromNode] || !routes[fromNode][toNode]) {
            return res.status(404).json({
                error: "Route not found between the specified points",
                from_node: fromNode,
                to_node: toNode
            });
        }

        // Get the main route
        const route = routes[fromNode][toNode];

        // Add extra distances (from user points to nearest nodes)
        const totalDistance = route.distance + fromExtraDistance + toExtraDistance;

        // Average walking speed ~ 1.4 m/s (5 km/h) - can be adjusted
        const AVERAGE_WALKING_SPEED = 1.4; // m/s

        let totalTime = route.time || 0;
        if (fromExtraDistance || toExtraDistance) {
            totalTime += Math.round((fromExtraDistance + toExtraDistance) / AVERAGE_WALKING_SPEED);
        }


        // Build the full path
        let fullPath = route.path || [];

        // Add start point to the beginning of the path
        if (fromPath) {
            fullPath = fromPath + " -> " + fullPath;
        }

        // Add destination point to the end of the path
        if (toPath) {
            fullPath = fullPath  + " -> " + toPath;
        }

        return res.json({
            strategy,
            distance: Math.round(totalDistance),
            time: totalTime,
            path: fullPath
        });
    })

    /**
     * GET /
     * Returns all nodes from graph.
     */
    app.get("/", async (req, res) => {
            res.json(nodes);
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

    // 🔁 Heartbeat log every 15 seconds
    setInterval(() => {
        console.log(`I'm alive on port ${port}`);
    }, 15000);
}

module.exports = {startServer};
