// Import Model

// Import Module

require("dotenv").config();

class UsersControllers {
  async getAll(req, res) {
    console.log("controller getAll");
    res.json({ message: "controller User getAll" });
  }


  async getId(req, res) {
    console.log("controller get id");
    res.json({ message: "controller User ID" });
  }
}

module.exports = UsersControllers;