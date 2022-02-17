/*
 * Model de 'Article'
 ******************************/

// Connection à la base de données
const connection = require("../../config/ConnectionDB");

// Module
// const bcrypt = require("bcrypt");

// Model
const User = function (user) {
    this.id = user.id,
    this.name = user.name,
    this.mail = user.mail,
    this.pass = user.pass,
    this.isAdmin = user.isAdmin,
    this.isCandidat = user.isCandidat,
    this.isRecruteur = user.isRecruteur,
    this.isBanned = user.isBanned,
    this.isVerified = user.isVerified,
    this.date_create = user.date_create;
};

// Get All Users
User.getUserAll = function (result) {
  console.log("Method getAll Model User");
  // Se connecter à la base de données
  connection.getConnection(function (err, conn) {
    /* Requête SQL pour afficher tous les Users 
    de la table user de la DB Skew */
    conn.query(`SELECT * FROM user`, (error, data) => {
      //   Si erreur l'afficher
      if (error) throw error;
      //   Sinon afficher les datas
      else result(null, data);
    });
    // Stop la function une fois exécutée
    conn.release();
  });
};

// Get One User
User.getUserId = function (user, result) {
  // console.log("Method getID Model User", user);
  connection.getConnection(function (error, conn) {
    conn.query(` SELECT * FROM user WHERE id = "${user.id}"`, (error, data) => {
      if (error) throw error;
      else result(null, data);
      // console.log("data", data);
    });
    conn.release();
  });
};

// Ban User
User.banUser = function (user, result) {
  // console.log("Method BAN Model User", user);
  connection.getConnection(function (error, conn) {
    conn.query(
      `SELECT id FROM user WHERE isBanned IS TRUE`,
      (error, data) => {
        if (error) throw error;
        result(null, data);
      }
    );
    conn.release();
  });
};

// Delete User
User.deleteUser = function (user, result) {
  // console.log("Method delete Model User", user);
  connection.getConnection(function (error, conn) {
    conn.query(
      ` DELETE FROM user 
    WHERE id  = "${user.id}"`,
      (error, data) => {
        if (error) throw error;
        else result(null, data);
        // console.log('data', data)
      }
    );
    conn.release();
  });
};

// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = User;
