// Import Model
const Job = require("../../models/admin/JobsModel");

require("dotenv").config();

class JobsController {
  // GET ALL JOBS
  // Récupération de la route "getJobAll"
  async getJobAll(req, res) {
    console.log("getAllJob");
    // Essayes cette fonction
    try {
      /* SQL récupération de tous les users
      à partir de la fonction qui a été créé dans le model */
      Job.getJobAll((err, data) => {
        console.log("response controller all JOBS", data);
        // Si il y a erreur le mentionner
        if (err) res.send({ message: "error in request db" });
        // Sinon retourné cette réponse avec les data
        else
          return res.json({
            job: data,
            message: "All Jobs has been successfully GETTED. !!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // async getJobId(req, res) {
  //   console.log("controller getJobId");
  //   res.send({ message: "GET JOBS ID" });
  // }
}

module.exports = JobsController;
