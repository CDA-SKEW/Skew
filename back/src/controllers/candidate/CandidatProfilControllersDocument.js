// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllersDocument {
    async getProfilDocument(req, res) {
        console.log("controller READ Profil DOCUMENT");
        res.json({ message: "controller READ profil DOCUMENT" });
    }

    async createProfilDocument(req, res) {
        console.log("controller CREATE Profil candidat DOCUMENT");
        res.json({ message: "controller CREATE profil candidat DOCUMENT" });
    }

    async updateProfilDocument(req, res) {
        console.log("controller UPDATE Profil Candidat DOCUMENT");
        res.json({ message: "controller UPDATE profil candidat DOCUMENT" });
    }

    async deleteProfilDocument(req, res) {
        console.log("controller DELETE Profil Candidat CERTIFICATE");
        res.json({ message: "controller DELETE profil candidat DOCUMENT" });
    }
}

module.exports = CandidatProfilControllersDocument