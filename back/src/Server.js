const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express')
const router = require("./routes/index");

class Server {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  run() {
    // Cors
    this.app.use(cors({
      origin: ['http://localhost:3000', 'http://192.168.1.4:3000', 'https://domain.com/', 'http://domain.com/','http://192.168.1.69:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true
    }))
   
    // Express static permet de diriger un chemin sur un dossier en particulier
    this.app.use('/assets', express.static('public'))

    // Body Parser
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );

    // Routes
    this.app.use(router);

    // Run app
    return this.app.listen(this.port, () => {
      try {
        console.log(`server is running on ${this.port} ...🚀`);
      } catch (error) {
        throw error;
      }
    });
  }
}

module.exports = Server;
