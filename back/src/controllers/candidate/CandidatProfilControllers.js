// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllers {
  async getProfil(req, res) {
    console.log("controller READ Profil candidat");
    res.json({ message: "controller READ profil candidat" });
  }

  async createProfil(req, res) {
    console.log("controller CREATE Profil candidat");
    res.json({ message: "controller CREATE profil candidat" });
  }

  async updateProfil(req, res) {
    console.log("controller UPDATE Profil Candidat");
    res.json({ message: "controller UPDATE profil candidat" });
  }

  async deleteProfil(req, res) {
    console.log("controller DELETE Profil Candidat");
    res.json({ message: "controller DELETE profil candidat" });
  }




}

module.exports = CandidatProfilControllers;

