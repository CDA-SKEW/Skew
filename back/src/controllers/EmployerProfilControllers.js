// Import Model

// Import Module

require("dotenv").config();

class EmployerProfilControllers  {
  async getProfil(req, res) {
    console.log("controller get Profil Employeur");
    res.send({ message: "controller get profil employer" });
  }
}

module.exports = EmployerProfilControllers;
