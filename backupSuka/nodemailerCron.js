// const nodemailer = require("nodemailer");
// require("dotenv").config();
// const cron = require("node-cron");
// //...

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   service: "gmail",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.USER_NODMAILER,
//     pass: process.env.Pw_NODMAILER,
//   },
// });

// // Send emails every Monday.
// cron.schedule("* * * * * *", function () {
//   console.log("--------------------------------");
//   console.log("Running Cron Process");

//   let messageOptions = {
//     from: process.env.USER_NODMAILER,
//     to: "soukainataa1987@yahoo.fr",
//     subject: "backup",
//     text: "Hello user! This email has been scheduled to be automatically sent out, every Monday",
//   };

//   transporter.sendMail(messageOptions, function (error, info) {
//     if (error) {
//       throw error;
//     } else {
//       console.log("Email sended!");
//     }
//   });
// });
