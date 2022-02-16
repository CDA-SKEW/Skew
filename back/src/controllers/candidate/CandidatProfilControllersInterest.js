// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllersInterest {

    async createProfilInterest(req, res) {
        console.log("controller CREATE Profil candidat INTEREST");
        res.json({ message: "controller CREATE profil candidat INTEREST" });
    }

    async updateProfilInterest(req, res) {
        console.log("controller UPDATE Profil Candidat INTEREST");
        res.json({ message: "controller UPDATE profil candidat INTEREST" });
    }

    async deleteProfilInterest(req, res) {
        console.log("controller DELETE Profil Candidat INTEREST");
        res.json({ message: "controller DELETE profil candidat INTEREST" });
    }
}

module.exports = CandidatProfilControllersInterest