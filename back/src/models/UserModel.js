/*
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");

// Module
const bcrypt = require("bcrypt");

// Model
const User = function (user) {
  this.id = user.id,
    this.mail = user.mail,
    this.pass = user.pass,
    this.isAdmin = user.isAdmin,
    this.isCandidat = user.isCandidat,
    this.isRecruteur = user.isRecruteur,
    this.isVerified = user.isVerified,
    this.isBanned = user.isBanned,
    this.date_update = user.date_update,
    this.date_create = user.date_create;
};

// Verif login
User.login = function (user, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `SELECT * FROM user where mail = "${user.mail}"`,
      (error, data) => {
        if (error) throw error;
        if (data.length <= 0) result(null, { message: 'error' });
        // Compare les pass hachés
        else bcrypt.compare(user.pass, data[0].pass, function (err, check) {
          if (err) throw err;
          if (check) result(null, data[0]);
          else result(null, { message: 'error' });
        });
        conn.release();
      }
    );
  });
};

// Register
User.register = function (body, result) {
  connection.getConnection(async function (error, conn) {
    if (error) throw error;
    conn.query(
      `INSERT INTO user (mail, pass, isAdmin, isCandidat, isRecruteur)
            VALUES ("${body.mail}", "${await bcrypt.hash(body.pass, 10)}", 0, "${body.isCandidat}", "${body.isRecruteur}")`,
      (error, newUser) => {
        if (error) throw error;
        conn.query(`insert into contactProfil (user_id) values (${newUser.insertId})`, (err, profilUser) => {
          if (err) throw err
          console.log('data res model test create user', profilUser)

          result(null, newUser);

        })
        conn.release();
      }
    );
  });
};

module.exports = User;