const Server = require('./src/Server');
const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3000;

  // Express static permet de diriger un chemin sur un dossier en particulier
app.use('/assets', express.static('assets'))

const index = new Server(app, port);
index.run();