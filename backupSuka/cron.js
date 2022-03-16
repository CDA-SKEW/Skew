// node-cron: https://www.npmjs.com/package/node-cron
// child-process: https://nodejs.org/api/child_process.html

// Request node-cron & Express
const cron = require("node-cron");
const fs = require("fs");
const moment = require("moment");
// Processus enfants
const { spawn } = require("child_process");
const moment = require("moment");
const { exec } = require("child_process");

require("dotenv").config();

/* * * * * * 
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional ) */

// Créer un nouveau répertoire avec fs
// fs.mkdir("../backupSuka/adminBackup", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("New directory successfully created.");
//   }
// });

// Fréquence de sauvegarde comme ici 1 fois par jour
cron.schedule("* * * * * *", () => {
  // Générer dynamiquement le nom du fichier avec moment.js
  const fileName = `${Math.round(Date.now() / 1000)}${
    process.env.DATABASE
  }_${moment().format("YYYY_MM_DD")}.dump.sql`;
  // Ajouter le fichier créé dans un dossier en spécifiant le chemin
  const skew = fs.createWriteStream(
    `../backupSuka/adminBackup/${fileName}.gz`,
    { compressFile: true }
  );
  console.log("-------------------✈️--------------------");
  console.log("Running Database Backup Cron Job");
  // Exécuter
  const mysqldump = spawn("mysqldump", [
    "-u",
    process.env.USERDB,
    `-p${process.env.PASSWORD}`,
    process.env.DATABASE,
  ]);

  mysqldump.stdout
    .pipe(skew)
    .on("finish", () => {
      console.log("Database Backup Completed !  👌");
    })
    .on("error", (err) => {
      console.log(err);
    });
});
