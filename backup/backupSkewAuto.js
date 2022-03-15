const { spawn } = require("child_process"),
  cron = require('node-cron'),
  fs = require("fs"),
  moment = require('moment'),
  path = require("path");

require('dotenv').config()

const DB_USER = process.env.USERDB,
  DB_PASSWORD = process.env.PASSWORD,
  DB_NAME = process.env.DATABASE;

console.log("toto", DB_USER, DB_PASSWORD,
  DB_NAME)

const folder = path.resolve("../backup/files");
const dirDay = path.resolve(folder + "/dirDay");
const dirWeek = path.resolve(folder + "/dirWeek");
const dirMonth = path.resolve(folder + "/dirMonth");
const dirYear = path.resolve(folder + "/dirYear");

// Fonction gestion des repertoire
function mkDir(folder) {
  fs.mkdirSync(folder, {
    recursive: true,
  });
  return folder;
}

function rmDir(folder) {
  fs.rmdir(folder, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }
  });
}

// console.log("coucou1")

//toute les 10 secondes on fait cette action '*/30 * * * * *'
// tache effectuer tout les 23h de 59 min '59 23 * * *'
cron.schedule("*/10 * * * * *", () => {
  // console.log("coucou2")

  mkDir(dirDay);
  fs.readdir(dirDay, (err, files) => {
    //console.log("dayFiles", files.length);
    const days = files.length;
    if (days < 7) {
      backup(dirDay);
    } else {
      rmDir(dirDay);
      mkDir(dirWeek);
      fs.readdir(dirWeek, (err, files) => {
        //console.log("weekFiles", files.length);
        const week = files.length;
        if (week < 4) {
          backup(dirWeek);
        } else {
          rmDir(dirWeek);
          mkDir(dirMonth);
          fs.readdir(dirMonth, (err, files) => {
            //console.log(files.length);
            const month = files.length;
            if (month < 12) {
              backup(dirMonth);
            } else {
              rmDir(dirMonth);
              mkDir(dirYear);
              backup(dirYear);
            }
          });
        }
      });
    }
  });
});

const backup = (dir) => {
  //console.log("fonction backup", dir)

  let fileName = `${DB_NAME}_${moment().format("YYYY_MM_DD_HH_MM_SS")}.sql`;
  let wstream = fs.createWriteStream(`${dir}/${fileName}`);

  console.log("---------------------");
  console.log("Running Database Backup Cron Job");
  // Notre ligne de commande à executer
  const mysqldump = spawn("mysqldump", [
    "-u",
    DB_USER,
    `-p${DB_PASSWORD}`,
    DB_NAME,
  ]);

  // On lance le stream de notre backup
  // ?? à commenter si vous tester la method synchron
  mysqldump.stdout
    .pipe(wstream)
    .on("finish", () => {
      console.log("DB Backup Completed!");
    })
    .on("error", (err) => {
      console.log(err);
    });
};
