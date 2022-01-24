// Import Model

// Import Module

require("dotenv").config();

class UserControllers {
  async getAll(req, res) {
    console.log("controller getAll");
    res.send({ message: "controller User getall" });
  }
}

module.exports = UserControllers;
