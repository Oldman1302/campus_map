/**
 * Application launcher.
 * Loads environment variables and starts the server.
 */

require("dotenv").config();
const { startServer } = require("./server/server.js");

// Read port from .env
const PORT = process.env.PORT || 5001;

startServer(PORT);

// ______________________________________________________
// require("./data/campus")
// ______________________________________________________

// console.log(`I'm alive on ${PORT}`);
// setInterval(function () {
//     console.log(`I'm alive on ${PORT}`);
// }, 15000)
