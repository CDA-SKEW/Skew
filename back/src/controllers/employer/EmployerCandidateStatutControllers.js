// Import Model

// Import Module

require("dotenv").config();

class EmployerCandidateStatutControllers  {
  async updateCandidate(req, res) {
    console.log("controller update statut Candidate");
    res.json({ message: "controller update statut Candidate" });
  }
}

module.exports = EmployerCandidateStatutControllers;

