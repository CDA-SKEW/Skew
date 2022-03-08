// Import Model
const Job = require("../../models/admin/JobsModel");

require("dotenv").config();

class JobsController {
  // GET ALL JOBS
  // Récupération de la route "getJobAll"
  async getListJobs(req, res) {
    console.log("getAllJob");
    // Essayes cette fonction
    try {
      /* SQL récupération de tous les users
      à partir de la fonction qui a été créé dans le model */
      Job.getListJobs((err, data) => {
        // console.log("response controller all JOBS", data);
        // Si il y a erreur le mentionner
        if (err) res.send({ message: "error in request db" });
        // Sinon retourné cette réponse avec les data
        else
          return res.json({
            job: data,
            method: req.method,
            status: "success",
            message: "All Jobs has been successfully GETTED. !!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // GET JOB ID
  // Récupération de la route "getJobId"
  // async getJobId(req, res) {
  //   const { id } = req.params;
  //   // Essayes cette fonction
  //   try {
  //     // console.log(id, "req.params", { ...req.params });
  //     Job.getJobId({ id }, (err, data) => {
  //       // console.log("response controller Job ID", data);
  //       if (err) res.send({ message: "error in request db" });
  //       // Sinon retourné cette réponse avec les data
  //       else
  //         return res.json({
  //           job: data,
  //           method: req.method,
  //           status: "success",
  //           message: "The job has been successfully GETTED. !!!",
  //         });
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // UPDATE JOB
  // async putJob(req, res) {
  //   const { id } = req.params;
  //   let { isVerified } = req.body;
  //   console.log(
  //     "isVerified",
  //     typeof isVerified,
  //     isVerified,
  //     Boolean(isVerified)
  //   );

  //   isVerified = isVerified === "true" ? 1 : 0;

  //   // Essayes cette fonction
  //   try {
  //     console.log(id, { ...req.body });
  //     Job.putJob({ id, isVerified }, (err, data) => {
  //       // console.log("response controller user ban", data);
  //       if (err) res.send({ message: "error in request db" });
  //       // Sinon retourner cette réponse avec les data
  //       else
  //         return res.json({
  //           job: data,
  //           method: req.method,
  //           status: "success",
  //           message: " The job has been successfully UPDATED.!!!",
  //         });
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // DELETE JOB
  async deleteJob(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      Job.deleteJob({ id }, (err, data) => {
        // console.log('response controller user ID', data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            job: data,
            method: req.method,
            status: "success",
            message: " The job has been successfully DELETED.!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = JobsController;
