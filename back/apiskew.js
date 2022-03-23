const Server = require("./src/Server");
const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3005;

const index = new Server(app, port);
index.run();

module.exports = index
