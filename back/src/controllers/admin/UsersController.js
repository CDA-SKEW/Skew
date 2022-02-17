// Import Model
const User = require("../../models/admin/UsersModel");

require("dotenv").config();

class UsersControllers {
  // GET ALL USERS
  // Récupération de la route "usersAll"
  async getUserAll(req, res) {
    // Essayes cette fonction
    try {
      /* SQL récupération de tous les users
      à partir de la fonction qui a été créé dans le model */
      User.getUserAll((err, data) => {
        // console.log('response controller all user', data);
        // Si il y a erreur le mentionner
        if (err) res.send({ message: "error in request db" });
        // Sinon retourné cette réponse avec les data
        else
          return res.json({
            users: data,
            message: "All userS has been successfully GETTED. !!!",
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
            users: data,
            message: "The user has been successfully GETTED. !!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }

  // BAN USER
  async banUser(req, res) {
    const { id } = req.params;
    // Essayes cette fonction
    try {
      // console.log(id, mail, { ... req.body });
      User.banUser({ id }, (err, data) => {
        // console.log('response controller user ban', data);
        if (err) res.send({ message: "error in request db" });
        // Sinon retourner cette réponse avec les data
        else
          return res.json({
            users: data,
            message: " The user has been successfully BANNED.!!!",
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
            users: data,
            message: " The user has been successfully DELETED.!!",
          });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersControllers;
