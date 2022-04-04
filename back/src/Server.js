const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const router = require("./routes/index");
const helmet = require("helmet");

class Server {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  run() {
    //Cors
    this.app.use(
      cors({
        origin: [
          "http://dr-kh.fr",
          "http://www.dr-kh.fr",
          "https://dr-kh.fr",
          "https://www.dr-kh.fr",
          "http://localhost:3000",
          "http://192.168.1.4:3000",
          "http://skew.souka.fr",
          "https://skew.souka.fr",
          "http://www.skew.souka.fr",
          "https://www.skew.souka.fr",
          "http://192.168.1.22:3000",
          "http://192.168.1.89:3000",
          "http://192.168.1.98:3000",
          "https://www.skew.liwza.com",
          "http://www.skew.liwza.com",
          "https://skew.liwza.com",
          "http://skew.liwza.com",
          "https://eti.hsuk.ml/",
          "http://eti.hsuk.ml/"

        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );

    // ************** Swagger ******************
    //** express-oas-generator
    //**  Attention quand le site est en production commenter ces lignes pour openAPI/swagger pour que ce ne soit pas accessible en ligne
    //** à décommenter pour la génération
    //** express-oas-generator

    //const expressOasGenerator = require('express-oas-generator')
    //expressOasGenerator.init(app, {});

    //** Attention quand le site est en production commenter ces lignes pour openAPI/swagger pour que ce ne soit pas accessible en ligne
    // const swaggerUi = require("swagger-ui-express");
    // const swaggerDocument = require("./config/swagger.json");
    // ************** / Swagger ******************


    // Express static permet de diriger un chemin sur un dossier en particulier
    this.app.use("/api/assets", express.static("public"));

    // Disable header express default
    this.app.disable("x-powered-by");

    // this.app.use(helmet())
    // hidePoweredBy() => disable("x-powered-by")
    this.app.use(helmet.hidePoweredBy());
    // contentSecurityPolicy() => Cela aide à prévenir les attaques de scripts intersites
    this.app.use(helmet.contentSecurityPolicy());

    // Body Parser
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );

    // ************** Swagger ******************
    //** Route Swagger
    //** Attention quand le site est en production commenter ces lignes pour openAPI/swagger pour que ce ne soit pas accessible en ligne
    // this.app.use(
    //   "/api-docs",
      // swaggerUi.serve,
      // swaggerUi.setup(swaggerDocument)
    // );
    // voici le lien pour l'api doc ex:http://localhost:3003/api-docs/#/
    // ************** / Swagger ******************

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
