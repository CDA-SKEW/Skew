// Import Model

// Import Module

require("dotenv").config();

class EmployerProfilUserControllers  {
  async getProfilUser(req, res) {
    console.log("controller get Profil Employeur");
    res.json({ message: "controller get profil employer" });
  }

  async updateProfilUser(req, res) {
    console.log("controller get Profil Employeur");
    res.json({ message: "controller update profil employer" });
  }
}

module.exports = EmployerProfilUserControllers;

