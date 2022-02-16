// Import Module

require("dotenv").config();

class MessagesController {
  async getMessageAll(req, res) {
    console.log("controller getMessageAll");
    res.send({ message: "GET MESSAGE ALL" });
  }

  async getMessageId(req, res) {
    console.log("controller getMessageId");
    res.send({ message: "GET MESSAGE ID" });
  }
}

module.exports = MessagesController;
