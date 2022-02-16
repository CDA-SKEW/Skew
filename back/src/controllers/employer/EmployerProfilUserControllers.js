// Import Model

const ProfilUser = require("../../models/employer/ProfilUser");


// Import Module

require("dotenv").config();

class EmployerProfilUserControllers  {

  async getProfilUser(req, res) {
    console.log("controller get Profil user Employeur");
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
              flash: "Create Article Success !",
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
    console.log("controller get Profil user Employeur");
    res.json({ message: "controller update user profil employer" });
  }
}

module.exports = EmployerProfilUserControllers;

