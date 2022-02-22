/*
 * On déclare nos constante
 * ************************ */
// import nodemailer
const nodemailer = require("nodemailer");
const { user } = require("./db");

require("dotenv").config();

// Déclaration du module de connection à notre Gmail (transporteur)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: "587",
  secure: false,
  auth: {
    user: process.env.USER_NODMAILER,
    pass: process.env.Pw_NODMAILER,
  },
});

module.exports = {
  // Action envoi mail par nodemailer
  SendEmailCandidate: (req, res) => {
    console.log("je suis dans le controlleur nodemailer");
    console.log("req.body", req.body);

    const message = "Votre mail a bien été envoyé !";
    arrayFiles = [];

    // initialisation du tableau array avec data signature
    arrayFiles.push({
      filename: "logo.webp",
      path: "public/images/logo/logo.png",
      cid: "signatureLogo", //same cid value as in the html img src
    });

    console.log(arrayFiles); // On configure notre mail à envoyer par nodemailer

    const mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.mail,
      cci: req.body.mailEmployeur,
      subject: req.body.subject,
      html: `${req.body.textMessage} <br>
      `,
      // attachments: arrayFiles,
    };
    // On demande à notre transporter d'envoyer notre mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("err", err),
          res.status(500).send({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        return res.json({
          method: req.method,
          status: "success",
          message: message,
        });
      }
    });
  },

  replyMessage: (req, res) => {
    // const message = "Votre mail a bien été envoyé !";
    // arrayFiles = [];

    // // initialisation du tableau array avec data signature
    // arrayFiles.push({
    //   filename: "logo.webp",
    //   path: "public/images/logo/logo.png",
    //   cid: "signatureLogo", //same cid value as in the html img src
    // });

    // console.log(arrayFiles); // On configure notre mail à envoyer par nodemailer

    console.log("Reply NodeMailer Config");
    console.log(req.body.name);
    const mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.name,
      sujet: req.body.sujet,
      html: `
      ${req.body.message} <br>
  `,
    };
    console.log(mailOptions);
  },
};
