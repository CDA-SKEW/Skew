const { spawn } = require("child_process"),
    cron = require('node-cron'),
    fs = require("fs"),
    moment = require('moment'),
    path = require("path");

require('dotenv').config()

const DB_USER = process.env.USERDB,
    DB_PASSWORD = process.env.PASSWORD,
    DB_NAME = process.env.DATABASE;

const folder1 = path.resolve("./folder1");
const folder2 = path.resolve("./folder2");
const folder3 = path.resolve("./folder3");

// tache effectuer tout les 23h de 59 min '59 23 * * *'
cron.schedule("59 23 * * *", () => {
    fs.mkdirSync(folder1, { recursive: true, });
    fs.readdir(folder1, (err, files) => {
        const data = files.length;
        if (data < 10) {
            backup(folder1);
        } else {
            fs.rmdir(folder1, { recursive: true }, (err) => { if (err) { throw err; } });
            fs.mkdirSync(folder2, { recursive: true, });
            fs.readdir(folder2, (err, files) => {
                const data2 = files.length;
                if (data2 < 30) {
                    backup(folder2);
                } else {
                    fs.rmdir(folder2, { recursive: true }, (err) => { if (err) { throw err; } });
                    fs.mkdirSync(folder3, { recursive: true, });
                    backup(folder3);
                }
            })
        }
    })
})

const backup = (folder) => {

    let fileName = `${DB_NAME}_${moment().format("YYYY_MM_DD_hh_mm_ss")}.sql`;
    let wstream = fs.createWriteStream(`${folder}/${fileName}`);

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
};
