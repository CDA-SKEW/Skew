/*
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");

// Module
// const bcrypt = require("bcrypt");

// Model
const User = function (user) {
  this.id = user.id,
    this.mail = user.mail,
    this.pass = user.pass,
    this.isAdmin = user.isAdmin,
    this.isCandidat = user.isCandidat,
    this.isRecruteur = user.isRecruteur,
    this.isBanned = user.isBanned,
    this.isVerified = user.isVerified,
    this.date_create = user.date_create
};

// Get User ID
User.login = function (user, result) {
  console.log("Login controllers", user);
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // check user if exist
    conn.query(
      `SELECT id, mail, pass, isAdmin, isCandidat, isRecruteur, isBanned, isVerified, date_create
       FROM users where mail = "${user.mail}"`,
      (error, data) => {
        if (error) throw error;
        console.log("User Model login", data[0], user);
        if (data.length <= 0) result(null, { message: 'error' });
        // bcrypt (Compare hash.body with hash.db)
        else ((user.pass === data[0].pass), function (err, check) {
          // bcrypt.compare(user.pass, data[0].pass, function (err, check) {
          if (err) throw err;
          console.log('check compare hash', check)
          if (check) result(null, data[0]);
          else result(null, { message: 'error' });
        });
        conn.release();
      }
    );
  });
};

// Post user
User.register = function (newUser, result) {
  console.log("Register controllers");
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // bcrypt
    bcrypt.hash(newUser.pass, 10).then(function (hash) {
      // Store hash in your password DB.
      conn.query(
        `INSERT INTO users (mail, pass, isAdmin, isCandidat, isRecruteur)
        VALUES ("${newUser.mail}", "${newUser.pass}", 0, "${newUser.isCandidat}", "${newUser.isRecruteur}")`,
        (error, data) => {
          if (error) throw error;
          result(null, data);
          conn.release();
        }
      );
    });
  });
};

// User
// Et l'on export notre model grace à la passerelle Mongoose
// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = User;