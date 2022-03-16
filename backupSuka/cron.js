// node-cron: https://www.npmjs.com/package/node-cron
// child-process: https://nodejs.org/api/child_process.html

// Request node-cron & Express
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const moment = require("moment");
// Processus enfants
const { spawn } = require("child_process");

require("dotenv").config();

// (app = express()), (PORT = process.env.PORT || 1870);
// Creér le fichier "dumpadmin.sql"
// const skew = fs.createWriteStream("dumpadmin.sql");

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

// var mysqldump = spawn("mysqldump", [
//   //   "-u",
//   "USERDB",
//   // "-p",
//   "PASSWORD",
//   "DATABASE",
// ]);

// mysqldump.stdout
//   .pipe(skew)
//   .on("finish", function () {
//     console.log("Completed");
//   })
//   .on("error", function (err) {
//     console.log(err);
//   });

// Fréquence de sauvegarde comme ici 1 fois par jour
//   cron.schedule(" * * * * * * ", () => {
// Générer dynamiquement le nom du fichier avec moment.js
const fileName = `${process.env.DATABASE}_${moment().format("YYYY_MM_DD")}.sql`;
const skew = fs.createWriteStream(fileName);
console.log("---------------------");
console.log("Running Database Backup Cron Job");
const mysqldump = spawn("mysqldump", [
  "-u",
  process.env.USERDB,
  `-p${process.env.PASSWORD}`,
  process.env.DATABASE,
]);

mysqldump.stdout
  .pipe(skew)
  .on("finish", () => {
    console.log("DB Backup Completed !");
  })
  .on("error", (err) => {
    console.log(err);
  });

// cron.schedule("* * * * *", function () {
//   console.log("Process running every minute");
// });
//   });

// Express run PORT
// app.listen(PORT, function () {
//   console.log(
//     `Ecoute le port ${PORT}, lancé le : ${new Date().toLocaleString()}`
//   );
// });
