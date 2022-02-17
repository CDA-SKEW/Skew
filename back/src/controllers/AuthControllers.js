// Import Model
const User = require("../models/UserModel");

// Import Module
const jwt = require("jsonwebtoken");

require("dotenv").config();

class AuthControllers {
  async login(req, res) {
    try {
      User.login({ ...req.body }, (err, data) => {
        if (err) {
          res.status(500).send({
            message: err.message || "Une erreur est survenue",
          });
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
                // isVerified: data.isVerified === 1 ? true : false,
                // isBanned: data.isBanned === 0 ? true : false,
              },
              process.env.SIGN_JWT,
              { expiresIn: "1h" }
            );
          }

          return res.send({
            status: "success",
            flash: "Login Success !",
            token: token,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async register(req, res) {
    let newUser = new User({
      mail: String(req.body.mail),
      pass: String(req.body.pass),
      isCandidat: Number(req.body.isCandidat),
      isRecruteur: Number(req.body.isRecruteur),
    });
    try {
      User.register(newUser, (err, data) => {
        console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          // JWT
          return res.send({
            status: "success",
            flash: "Register Success !",
            token: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async checkToken(req, res) {
    console.log("check", req.params.token);
    const user = jwt.verify(req.params.token, process.env.SIGN_JWT, (err, decoded) => {
      if (err) return;
      return decoded;
    });
    try {
      // JWT
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
          // isVerified: user.isVerified
          // isBanned: user.isBanned
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthControllers;