/*
 * Model de 'User'
 ******************************/
const connection = require("../config/ConnectionDB");

// Import Module
// const jwt = require("jsonwebtoken");

require("dotenv").config();

class AuthControllers {
  async login(req, res) {
    console.log("controller login", req.body);
    try {
      User.login({ ...req.body }, (err, data) => {
        console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          let token = "visitor";
          if (data.mail) {
            // token = jwt.sign(
            token = (
              {
                id: data.id,
                mail: data.mail,
                authenticate: data.isVerified ? true : false,
                isVerified: data.isVerified === 1 ? true : false,
                isAdmin: data.isAdmin === 1 ? true : false,
              }
              // process.env.SIGN_JWT,
              // { expiresIn: "1h" }
            );
          }

          return res.send({
            method: req.method,
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

  // async register(req, res) {
  //   let newUser = new User({
  //     mail: String(req.body.mail),
  //     pass: String(req.body.pass),
  //   });
  //   try {
  //     User.register(newUser, (err, data) => {
  //       console.log("data res", data);
  //       if (err) {
  //         console.log("err", err),
  //           res.status(500).send({
  //             message: err.message || "Une erreur est survenue",
  //           });
  //       } else {
  //         // JWT
  //         return res.send({
  //           method: req.method,
  //           status: "success",
  //           flash: "Login Success !",
  //           token: data,
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async checkToken(req, res) {
  //   console.log("check token", req.params.token);
  //   const user = jwt.verify(req.params.token, process.env.SIGN_JWT, (err, decoded) => {
  //     if (err) return;
  //     return decoded;
  //   });
  //   try {
  //     // JWT
  //     return res.send({
  //       method: req.method,
  //       status: "success",
  //       flash: "Login Auth Success !",
  //       user: {
  //         mail: user.mail,
          // authenticate: user.authenticate,
          // isVerified: user.isVerified,
          // isAdmin: user.isAdmin
//         }
//       });
//     } catch (error) {
//       throw error;
//     }
//   }
}

module.exports = AuthControllers;