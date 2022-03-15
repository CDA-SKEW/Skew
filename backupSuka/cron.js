// Request node-cron & Express
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
// const shell = require("shell.js");
const spawn = require("child_process").spawn;
const connection = require("../back/src/config/ConnectionDB");
// const nodemailer = require("nodemailer");

// Create an new instance
app = express();

// node-cron: https://www.npmjs.com/package/node-cron
// child-process: https://nodejs.org/api/child_process.html

/* * * * * * 
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional ) */

// S'exécute toutes les minutes
// cron.schedule("* * * * *", function () {
//   console.log("Process running every minute");
// });

// Effacer le fichier errors.log tous les 25 du mois
cron.schedule("0 0 25 * *", function () {
  console.log("---------------------");
  console.log("Running Cron process delete");
  fs.unlink("./errors.log", (err) => {
    if (err) throw err;
    console.log("File errors.log successfully deleted!");
  });
});

// Back up the database at 12:32.
cron.schedule("32 12 * * *", function () {
  console.log("---------------------");
  console.log("Running Cron process database");
  if (shell.exec("connection").code !== 0) {
    shell.exit(1);
  } else {
    shell.echo("Database backup completed!");
  }
});

app.listen(1870);
