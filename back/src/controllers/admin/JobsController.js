// Import Module

require("dotenv").config();

class JobsController {
  async getJobAll(req, res) {
    console.log("controller getAllJobs");
    res.send({ message: "GET JOBS ALL" });
  }

  async getJobId(req, res) {
    console.log("controller getJobId");
    res.send({ message: "GET JOBS ID" });
  }

}

module.exports = JobsController;
