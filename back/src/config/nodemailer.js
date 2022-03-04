/*
 * On déclare nos constante
 * ************************ */
// import nodemailer
const nodemailer = require("nodemailer");
const user = require("../models/UserModel");

require("dotenv").config();

// Déclaration du module de connection à notre Gmail (transporteur)
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_NODMAILER,
    pass: process.env.Pw_NODMAILER,
  },
});

var rand, mailOptions, host, link;

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

    // console.log(arrayFiles); // On configure notre signature du mail à envoyer par nodemailer

    const mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.mail,
      bcc: req.body.mailEmployeur,
      subject: req.body.subject,
      html: `
      <strong>Vos coordonnées:</strong>
      <br>
      Nom: ${req.body.name}
      <br>
      Prénom: ${req.body.lastName}
      <br>
      Téléphone: ${req.body.phone}
      <br>
      <br>
      <strong>Message de l'employeur:</strong>
      <br>
      ${req.body.textMessage} <br><br>
      <div style="display: flex;margin-bottom: 15px;">
      <span>Cordialement,</span>
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
    arrayFiles = [];
    // initialisation du tableau array avec data signature
    arrayFiles.push({
      filename: "logo.webp",
      path: "public/images/logo/logo.png",
      cid: "signatureLogo", //same cid value as in the html img src
    });

    console.log(arrayFiles); // On configure notre mail à envoyer par nodemailer
    console.log("Reply NodeMailer Config");
    const mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.mail,
      subject: req.body.sujet,
      firstname: req.body.firstname,
      text: req.body.reply,
      date: new Date(),
      html: `
      <h2 style="color:#ABC4FF;"> Bonjour,  ${req.body.firstname} </h2>
      </br> <p>${req.body.reply}</br></p>  
      <div style="display: flex;margin-bottom: 15px;">
      <span>Cordialement,</span>
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
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("err", err),
          res.status(500).json({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        return res.json({
          method: req.method,
          status: "success",
          mess: "Email SENDED !!! ",
        });
      }
     
    });
  },

  VerifUser: (req, res) => {

    arrayFiles = [];
    // initialisation du tableau array avec data signature
    arrayFiles.push({
      filename: "logo.webp",
      path: "public/images/logo/logo.png",
      cid: "signatureLogo", //same cid value as in the html img src
    });

    rand = Math.floor((Math.random() * 100) + 54)
    
    host = req.get('host');

    link = "http://" + req.get('host') + "/api/auth/verify/" + rand;

    mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.mailInscription,
      subject: "Vérification du compte",
      rand: rand,
      html: `
      <strong>Félicitation, votre compte est créé !</strong>
      <br><br>

      <div>
        Pour finaliser votre inscription, il ne reste plus qu'a cliquer sur ce lien.
      </div>

      <a href=" ` + link + ` ">Click here to verify</a>


      <br><br>
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
      `,
      attachments: arrayFiles,
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
          flash: "L\'utilisateur a bien été créé. veuillez valider par mail pour pouvoir vous connecter!",
          mailoptions: mailOptions
        });
      }
    });
  },

  verifMail: (req, res) => {
    // Ici on tcheck notre protocole hébergeur (nodejs localhost) et le liens générer dans le mail
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
      // Ici on tcheck notre id du mail avec la variable enregistrer en cache (rand)
      if (req.params.id == mailOptions.rand) {
        try {
          user.verify(mailOptions, (err, data) => {
            if (err) res.status(500).send({ flash: err.message || "Une erreur est survenue", });
            else return res.redirect(process.env.URL + '/#/verif/' + mailOptions.rand)
          })
        } catch (error) { throw error; }
      } else res.end("<h1>Bad Request</h1>")
    } else res.end("<h1>Request is from unknown source")
  },

  mailLostMdp: (req, res) => {

    arrayFiles = [];
    // initialisation du tableau array avec data signature
    arrayFiles.push({
      filename: "logo.webp",
      path: "public/images/logo/logo.png",
      cid: "signatureLogo", //same cid value as in the html img src
    });

    rand = Math.floor((Math.random() * 100) + 54)
    
    host = req.get('host');

    link = "http://" + req.get('host') + "/api/auth/changemdp/" + rand;

    mailOptions = {
      from: process.env.USER_NODMAILER,
      to: req.body.mailLostMdp,
      subject: "Modification du mot de passe",
      rand: rand,
      html: `
      <strong>Modification du mot de passe</strong>
      <br><br>


      


      <br><br>
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
      `,
      attachments: arrayFiles,
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
          flash: "success mail new password!",
          mailoptions: mailOptions
        });
      }
    });
  },
};