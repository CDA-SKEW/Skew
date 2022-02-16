// Import Model

// Import Module

require("dotenv").config();

class EmployerCandidateStatutController {
  async getOffer(req, res) {
    console.log("controller get Offer Employeur");
    res.json({ message: "controller get Offer employer" });
  }

  async createOffer(req, res) {
    console.log("controller create offer Employeur");
    res.json({ message: "controller Create offer employer" });
  }

  async updateOffer(req, res) {
    console.log("controller update offer Employeur");
    res.json({ message: "controller update offer employer" });
  }

  async delOffer(req, res) {
    console.log("controller del offer Employeur");
    res.json({ message: "controller del offer employer" });
  }
}

module.exports = EmployerCandidateStatutController;
