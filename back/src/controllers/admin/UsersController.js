// Import Model
const User = require("../../models/admin/UsersModel");

require("dotenv").config();

class UsersController {
  // GET ALL USERS
  // Récupération de la route "getListUsers"
  async getListUsers(req, res) {
    // console.log("getAllUsers");
    // Essayes cette fonction
    try {
      /* SQL récupération de tous les users
      à partir de la fonction qui a été créé dans le model */
      User.getListUsers((err, data) => {
        // console.log("response controller all users", data);
        // Si il y a erreur le mentionner
        if (err) res.send({ message: "error in request db" });
        // Sinon retourné cette réponse avec les data
        else
          return res.json({
            user: data,
            method: req.method,
            status: "success",
            message: "All users has been successfully GETTED. !!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // GET USER ID
  // Récupération de la route "userID"
  async getUserId(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      // console.log(id,'req.params', {...req.params});
      User.getUserId({ id }, (err, data) => {
        // console.log('response controller user ID', data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourné cette réponse avec les data
        else
          return res.json({
            user: data,
            method: req.method,
            status: "success",
            message: "The user has been successfully GETTED. !!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // UPDATE USER (ban)
  async putUser(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      User.putUser({ id }, (err, data) => {
        // console.log("response controller user update", data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            method: req.method,
            status: "success",
            message: " The user has been successfully BANNED.!!!",
            user: data,
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // BADGE
  async putBadge(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      // console.log("UpdateBadgeController", id, badge);
      User.putBadge({ id }, (err, data) => {
        // console.log("response controller user update", data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            method: req.method,
            status: "success",
            message: " The user has been successfully BADGED.!!!",
            user: data,
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // Verif
  async verifUser(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      // console.log("UpdateBadgeController", id, badge);
      User.verifUser({ id }, (err, data) => {
        // console.log("response controller user update", data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            method: req.method,
            status: "success",
            message: " The user has been successfully VERIFIED.!!!",
            user: data,
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // DELETE USER
  async deleteUser(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      User.deleteUser({ id }, (err, data) => {
        // console.log('response controller user ID', data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            method: req.method,
            status: "success",
            message: " The user has been successfully DELETED.!!",
            user: data,
          });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersController;
