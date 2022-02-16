// Import Model

const ProfilUser = require("../../models/employer/ProfilUser");

// Import Module

require("dotenv").config();

class EmployerProfilUserControllers {
  async getProfilUser(req, res) {
    // console.log("controller get Profil user Employeur");
    try {
      ProfilUser.getById(String(req.params.id), (err, data) => {
        console.log("dataid res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            status: "success",
            flash: "Get User By Id !",
            message: "controller get user profil employer",
            dataProfilUser: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProfilUser(req, res) {
    // console.log(
    //   "controller get Profil user Employeur",
    //   req.body,
    //   req.params.id
    // );
    if (req.params.id && req.body.mail && req.body.oldMail) {
      // console.log("controller update mail", req.body);
      let profilUserObj = new ProfilUser({
        id: Number(req.params.id),
        mail: String(req.body.mail),
      });
      console.log("controller new profilUserObj", profilUserObj, req.body.oldMail);

      try {
        ProfilUser.editMail(profilUserObj, req.body.oldMail, (err, data) => {
          if (err) res.send(err);
          return res.json({
            method: req.method,
            status: "success",
            flash: "controller update user profil By ID !",
            message: "controller update user profil employer",
            dataProfilUser: data,
          });
        });
      } catch (error) {
        throw error;
      }
      // res.json({ message: "controller update user profil employer" });
    } else res.json("Error Request");
  }

}

module.exports = EmployerProfilUserControllers;
