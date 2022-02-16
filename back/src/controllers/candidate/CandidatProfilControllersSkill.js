// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllersSkill {

    async createProfilSkill(req, res) {
        console.log("controller CREATE Profil candidat SKILL");
        res.json({ message: "controller CREATE profil candidat SKILL" });
    }

    async updateProfilSkill(req, res) {
        console.log("controller UPDATE Profil Candidat SKILL");
        res.json({ message: "controller UPDATE profil candidat SKILL" });
    }

    async deleteProfilSkill(req, res) {
        console.log("controller DELETE Profil Candidat SKILL");
        res.json({ message: "controller DELETE profil candidat SKILL" });
    }
}

module.exports = CandidatProfilControllersSkill