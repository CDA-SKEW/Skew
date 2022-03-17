/*********
 * BACKUP
 *********/

// node-cron: https://www.npmjs.com/package/node-cron
// child-process: https://nodejs.org/api/child_process.html

// Request node-cron, moment & fs
const cron = require("node-cron");
const moment = require("moment");
const fs = require("fs");
const moment = require("moment");
// Processus enfants
const { spawn } = require("child_process");
// ENV
require("dotenv").config();

/* * * * * * 
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional ) */

// Request node-cron, nodemailer, moment & fs
const cron = require("node-cron");
const moment = require("moment");
const fs = require("fs");
const nodemailer = require("nodemailer");
// Processus enfants
const { spawn } = require("child_process");
// ENV
require("dotenv").config();

// Créer un nouveau répertoire avec fs
// fs.mkdir("../backupSuka/backup", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("New directory successfully created.");
//   }
// });

// Config Nodemailer
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  secure: true,
  auth: {
    user: process.env.USER_NODMAILER,
    pass: process.env.Pw_NODMAILER,
  },
});

// 0 0 * * *

// Fréquence de sauvegarde comme ici 1 fois par jour
cron.schedule("* * * * * *", () => {
  // Générer dynamiquement le nom du fichier avec moment.js
  const fileName = `${process.env.DATABASE}_${moment().format(
    "YYYY_MM_DD"
  )}.dump.sql`;
  // Ajouter le fichier créé précédemment dans un dossier en spécifiant le chemin
  const skew = fs.createWriteStream(`../backupSuka/backup/${fileName}.gz`, {
    compressFile: true,
  });
  console.log("---------------------------------------");
  console.log("Running Database Backup Cron Job");
  // Exécuter la ligne de commande
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

  console.log("---------------------------------------");

  // Envoyer le résultat par e-mail
  arrayFiles = [];

  // initialisation du tableau array avec data signature
  arrayFiles.push({
    filename: "logo.webp",
    path: "public/images/logo/logo.png",
    cid: "signatureLogo", //same cid value as in the html img src
  });

  const messageOptions = {
    from: process.env.USER_NODMAILER,
    to: "soukainataa1987@gmail.com",
    subject: "backup",
    html: `
    <h4 style="color:#0A2061;">Hello Souka ! Le backup vient d'être réalisé ! 💻</h4>
    <div style="display: flex;margin-bottom: 15px;">
    <span>Celui est éfféctué une fois par jours.</span>
    </div>  
      <div style="display: flex;margin-bottom: 15px;">  
       <div style="margin-top:auto;margin-bottom:auto;width:100px;height:auto">
        <img style="width:100%" src="cid:signatureLogo"
            alt="logo">
       </div>  
      <div style="text-align:left;margin-left: 15px;">
       <div style="font-size: 13px;">
            <strong><span>Skew application </span></strong>
       </div>  
       <div style="font-size: 10px;">
            <div style="display: flex;">
                <span style="margin-right:2px">Adresse:</span>
                <span>18 rue Georges Bizet</span>
            </div>  
            <div style="display: flex;">
                <span style="margin-right:2px">Code postal:</span>
                <span>72700</span>
            </div>  
            <div style="display: flex;">
            <span style="margin-right:2px">Ville:</span>
            <span>Allonnes</span>
             </div>  
            <div style="display: flex;">
                <span style="margin-right:2px">Email:</span>
                <a href="mailto:${process.env.USER_NODMAILER}" style="color:#428BCA;">${process.env.USER_NODMAILER}</a>
            </div>  
            <div style="display: flex;">
                <span style="margin-right:2px">Link:</span>
                <a href="http://localhost:3000/" target="_blank"  rel="noreferrer" style="color:#428BCA;">
                    Skew Application</a>
            </div>  
         </div>
       </div>
     </div>
    `,
    attachments: arrayFiles,
  };

  transporter.sendMail(messageOptions, function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Email sended ! 👌");
    }
    console.log("---------------------------------------");
  });
});
