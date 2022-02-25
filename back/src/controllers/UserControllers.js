// Import Model

// Import Module

require("dotenv").config();

class UserControllers {
  async getAll(req, res) {
    // console.log("controller getAll");
    res.send({ message: "controller User getall" });
  }
  async post(req, res) {
    // console.log("controller post");
    res.send({ message: "controller User post" });
  }
}

module.exports = UserControllers;
