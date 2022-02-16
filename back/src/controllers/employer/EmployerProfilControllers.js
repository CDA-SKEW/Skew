// Import Model

// Import Module

require("dotenv").config();

class EmployerProfilControllers  {
  async getProfil(req, res) {
    console.log("controller get Profil Employeur");
    res.json({ message: "controller get profil employer" });
  }

  async createProfil(req, res) {
    console.log("controller create Profil Employeur");
    res.json({ message: "controller Create profil employer" });
  }

  async updateProfil(req, res) {
    console.log("controller get Profil Employeur");
    res.json({ message: "controller update profil employer" });
  }





}

module.exports = EmployerProfilControllers;

