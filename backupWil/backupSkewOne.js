const { spawn } = require("child_process"),
  fs = require("fs"),
  moment = require("moment"),
  path = require("path");

require("dotenv").config();

const DB_USER = process.env.USERDB,
  DB_PASSWORD = process.env.PASSWORD,
  DB_NAME = process.env.DATABASE;

const folder = path.resolve("../backupWil/files/simpleBackup");
mkDir(folder);

// Fonction creation repertoire
function mkDir(folder) {
  fs.mkdirSync(folder, {
    recursive: true,
  });
  return folder;
}

let fileName = `${DB_NAME}_${moment().format("YYYY_MM_DD_hh_mm_ss")}.sql`;
let wstream = fs.createWriteStream(`${folder}/${fileName}`);

console.log("---------------------");
console.log("Running Database Backup");
// Notre ligne de commande à executer
const mysqldump = spawn("mysqldump", [
  "-u",
  DB_USER,
  `-p${DB_PASSWORD}`,
  DB_NAME,
]);

// On lance le stream de notre backup
mysqldump.stdout
  .pipe(wstream)
  .on("finish", () => {
    console.log("DB Backup Completed!");
  })
  .on("error", (err) => {
    console.log(err);
  });
