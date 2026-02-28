const express = require("express");
const {loadCampusGraph} = require("../data/campus");
const {performance} = require('perf_hooks');

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

    console.log("Precomputing shortest paths (distance)...");
    const routesByDistance = await graph.dijkstraAll("distance");

    console.log("Precomputing shortest paths (time)...");
    const routesByTime = await graph.dijkstraAll("time");

    let t1 = performance.now();

    console.log(`Precomputation complete (${((t1 - t0) / 1000).toFixed(4)}s).\n`);

    const app = express();

    /**
     * GET-request to obtain the route from node A to node B according to specific strategy (distance or time)
     *
     * GET /route?from=A&to=B&strategy=distance|time
     */
    app.get("/route", (req, res) => {
        const { from, to, strategy = "distance" } = req.query;

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

        if (!routes[from] || !routes[from][to]) {
            return res.status(404).json({
                error: "Route not found"
            });
        }

        return res.json({
            strategy,
            ...routes[from][to]
        });
    })

    /**
     * GET /
     * Returns all nodes from graph.
     */
    app.get("/", async (req, res) => {
        // try {
            // // Get client IP (works with proxies like ngrok)
            // const ip =
            //     req.headers["x-forwarded-for"]?.split(",")[0] ||
            //     req.socket.remoteAddress;
            //
            // const response = await fetch(`http://ip-api.com/json/${ip}`);
            // const data = await response.json();

            res.json(nodes);

            // res.json({
            //     ip: ip,
            //     latitude: data.lat,
            //     longitude: data.lon,
            //     city: data.city,
            //     country: data.country
            // });
        //
        // } catch (error) {
        //     res.status(500).json({
        //         error: "Failed to determine location"
        //     });
        // }
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
