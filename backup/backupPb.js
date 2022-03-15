
const { spawn } = require('child_process');
const cron = require('node-cron'),
    func = require('../api/config/function'),
    fs = require('fs'),
    path = require("path")

const fsExtra = require('fs-extra')

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI
// console.log(MONGO_URI)

let folder = path.resolve("./backup/fichiers_backupDb_Skew")
func.mkDir(folder)

const dirDay = path.resolve(folder + "/dirDay")
const dirWeek = path.resolve(folder + "/dirWeek")
const dirMonth = path.resolve(folder + "/dirMonth")
const dirYear = path.resolve(folder + "/dirYear")

const sourceDir = path.resolve('./public/images');

// console.log("coucou1")

//toute les 10 secondes on fait cette action '*/10 * * * * *'

// tache effectuer tout les 23h de 59 min '59 23 * * *'
cron.schedule('59 23 * * *', () => {
    // console.log("coucou2")

    func.mkDir(dirDay)
    fs.readdir(dirDay, (err, files) => {
        //console.log("dayFiles", files.length);
        const days = files.length
        if (days < 7) {
            backup(dirDay)
        } else {
            func.rmDir(dirDay)
            func.mkDir(dirWeek)
            fs.readdir(dirWeek, (err, files) => {
                //console.log("weekFiles", files.length);
                const week = files.length
                if (week < 4) {
                    backup(dirWeek)
                } else {
                    func.rmDir(dirWeek)
                    func.mkDir(dirMonth)
                    fs.readdir(dirMonth, (err, files) => {
                        //console.log(files.length);
                        const month = files.length
                        if (month < 12) {
                            backup(dirMonth)
                        } else {
                            func.rmDir(dirMonth)
                            func.mkDir(dirYear)
                            backup(dirYear)
                        }
                    });
                }
            });
        }
    });
});

const backup = (dir) => {
    //console.log("fonction backup", dir)

    const times = func.extDateImg(new Date())
    const child = spawn('mongodump', [
        "--uri=" + MONGO_URI,
        "--archive=" + dir + "/backupLaPb_" + times,
        '--gzip',
    ]);



    child.on('exit', (code, signal) => {
        if (code) console.log('Process exit with code:', code);
        else if (signal) console.log('Process killed with signal:', signal);
        else {
            let destDir = dir + "/backupFilesLaPb_" + times;

            try {
                fsExtra.copySync(sourceDir, destDir, { recursive: true })
                console.log('copy image success!')
            } catch (err) {
                console.error(err)
            }
            console.log('Backup is successfull ');
        }
    });

    }
