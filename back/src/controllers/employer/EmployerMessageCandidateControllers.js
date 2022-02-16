// Import Model

// Import Module

require("dotenv").config();

class EmployerMessageCandidateController {
  async createMessage(req, res) {
    console.log("controller create message candidate");
    res.json({ message: "create message candidate" });
  }

}

module.exports = EmployerMessageCandidateController;

