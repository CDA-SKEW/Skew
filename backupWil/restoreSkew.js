const { spawn } = require('child_process');
require('dotenv').config();

const DB_USER = process.env.USERDB,
  DB_NAME = process.env.DATABASE;

console.log("---------------------");
console.log("Running Database Restore");
// Notre ligne de commande à executer   
const mysqlrestore = spawn("mysql", [
  "-u",
  DB_USER,
  "-p"< "./backup/files/simpleBackup/Skew_2022_03_15_10_30_07.sql",
]);

//console.log("mysqlrestore",mysqlrestore.stdout)
// On lance le stream de notre backup
mysqlrestore.stdout
  .on("finish", () => {
    console.log("DB Restore Completed!");
  })
  .on("error", (err) => {
    console.log(err);
  });

