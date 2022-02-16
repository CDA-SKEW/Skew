// Import Model

// Import Module

require("dotenv").config();

class CandidatProfilControllersContact {

    async createProfilContact(req, res) {
        console.log("controller CREATE Profil candidat CONTACT");
        res.json({ message: "controller CREATE profil candidat CONTACT" });
    }

    async updateProfilContact(req, res) {
        console.log("controller UPDATE Profil Candidat CONTACT");
        res.json({ message: "controller UPDATE profil candidat CONTACT" });
    }

    async deleteProfilContact(req, res) {
        console.log("controller DELETE Profil Candidat CONTACT");
        res.json({ message: "controller DELETE profil candidat CONTACT" });
    }




}

module.exports = CandidatProfilControllersContact;