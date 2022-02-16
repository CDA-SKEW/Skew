// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllersCertificate {

    async createProfilCertificate(req, res) {
        console.log("controller CREATE Profil candidat CERTIFICATE");
        res.json({ message: "controller CREATE profil candidat CERTIFICATE" });
    }

    async updateProfilCertificate(req, res) {
        console.log("controller UPDATE Profil Candidat CERTIFICATE");
        res.json({ message: "controller UPDATE profil candidat CERTIFICATE" });
    }

    async deleteProfilCertificate(req, res) {
        console.log("controller DELETE Profil Candidat CERTIFICATE");
        res.json({ message: "controller DELETE profil candidat CERTIFICATE" });
    }
}

module.exports = CandidatProfilControllersCertificate