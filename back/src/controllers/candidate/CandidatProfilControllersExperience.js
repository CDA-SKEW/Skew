// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllersExperience {

    async createProfilExperience(req, res) {
        console.log("controller CREATE Profil candidat EXPERIENCE");
        res.json({ message: "controller CREATE profil candidat EXPERIENCE" });
    }

    async updateProfilExperience(req, res) {
        console.log("controller UPDATE Profil Candidat EXPERIENCE");
        res.json({ message: "controller UPDATE profil candidat EXPERIENCE" });
    }

    async deleteProfilExperience(req, res) {
        console.log("controller DELETE Profil Candidat EXPERIENCE");
        res.json({ message: "controller DELETE profil candidat EXPERIENCE" });
    }
}

module.exports = CandidatProfilControllersExperience;