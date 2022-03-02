// Import Model
const User = require("../models/UserModel");
const nodemailer = require("../config/nodemailer");

// Import Module
const jwt = require("jsonwebtoken");

require("dotenv").config();

class AuthControllers {
  async login(req, res) {
    try {
      User.login({ ...req.body }, (err, data) => {
        if (err) {
          res.status(500).send({ flash: err.message || "Une erreur est survenue", });
        } else {
          let token = "visitor";
          if (data.mail) {
            token = jwt.sign(
              {
                id: data.id,
                mail: data.mail,
                isAdmin: data.isAdmin,
                isCandidat: data.isCandidat,
                isRecruteur: data.isRecruteur,
                isVerified: data.isVerified,
                isBanned: data.isBanned,
              },
              process.env.SIGN_JWT,
              { expiresIn: "1h" }
            );
            return res.status(200).send({
              success: 'success',
              flash: "Login Success!",
              token,
            });
          } else return res.status(503).json({ error: 'Fils de pul' })
          // } else return res.status(202).send({
          //   success: 'no',
          //   flash: data,
          //   token: 'no'
          // })

        }
      });
    } catch (error) { throw error; }
  }

  async register(req, res) {
    let newUser = new User({
      mail: String(req.body.mailInscription),
      pass: String(req.body.passInscription),
      isCandidat: Number(req.body.candidat),
      isRecruteur: Number(req.body.recruteur),
    });
    try {
      User.register(newUser, (err, data) => {
        if (err) {
          res.status(500).send({ message: err.message || "Une erreur est survenue", });
        } else {
          // JWT
          return res.send({
            status: "success",
            flash: data,
          });
        }
      });
    } catch (error) { throw error; }
  }

  async checkToken(req, res) {
    // console.log("check", req.params.token);
    const user = jwt.verify(req.params.token, process.env.SIGN_JWT, (err, decoded) => {
      if (err) return;
      return decoded;
    });
    try {
      // JWT
      if (user) {
        return res.send({
          method: req.method,
          status: "success",
          flash: "Login Auth Success !",
          user: {
            id: user.id,
            mail: user.mail,
            isAdmin: user.isAdmin,
            isCandidat: user.isCandidat,
            isRecruteur: user.isRecruteur,
            // isVerified: user.isVerified,
            // isBanned: user.isBanned
          }
        });
      } else return res.json({ error: 'Fils de pull !' })
    } catch (error) {
      throw error;
    }
  }

  async verifUser(req, res) {
    if (req.body.mail) {
      nodemailer.VerifUser(req, res);
    } else res.json("Error Request");
  }

  async verifMail(req, res) {
    nodemailer.verifMail(req, res);
  }
}

module.exports = AuthControllers;