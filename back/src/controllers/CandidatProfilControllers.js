// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllers {
    async getProfil(req, res) {
        console.log("controller get Profil Candidat");
        res.send({ message: "controller get profil candidat" });
    }

    async createProfil(req, res) {
        console.log("controller create Profil Candidat");
        res.send({ message: "controller Create profil candidat" });
    }

    async updateProfil(req, res) {
        console.log("controller get Profil Candidat");
        res.send({ message: "controller update profil candidat" });
    }





}

module.exports = CandidatProfilControllers;