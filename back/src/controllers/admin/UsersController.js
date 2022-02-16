// Import Model
const User = require("../../models/admin/UsersModel");

require("dotenv").config();

class UsersControllers {
  // GET ALL USERS
  // Récupération de la route "usersAll"
  async getAll(req, res) {
    // Essayes cette fonction
    try {
      /* SQL récupération de tous les users
      à partir de la fonction qui a été créé dans le model */
      User.getAll((err, data) => {
        console.log('response controller all user', data);
        // Si il y a erreur le mentionner
        if (err) res.send({ message: 'error in request db' });
        // Sinon retourné cette réponse avec les data
        else
          return res.json({
            status: 200,
            users: data,
            message: 'GET ALL USERS  SUCCESS !!!',
          });
      });
    } catch (error) {
      throw error;
    }
  };

  // GET USER ID
  // Récupération de la route "userID"
  async getId(req, res) {
    // Essayes cette fonction
    try {
      console.log('req.params', {...req.params});
      // Aller chercher les données en global
      User.getId({...req.params}, (err, data) => {
        // console.log('response controller user ID', data);
        if (err) res.send({ message: 'error in request db' });
        // Sinon retourné cette réponse avec les data
        else
          return res.send({
            users: data,
            message: 'GET USER ID  SUCCESS !!!',
          });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersControllers;
