process.env.DOTENV_CONFIG_QUIET = true; // disables hints from dotenv
const dotenv = require("dotenv");

dotenv.config()
const PORT = process.env.PORT || 8080;

console.log(`I'm alive on ${PORT}`);
setInterval(function () {
    console.log(`I'm alive on ${PORT}`);
}, 10000)