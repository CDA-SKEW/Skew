/*
 * Model de 'User'
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
    conn.query(`SELECT * FROM user WHERE mail = "${user.mail}"`, (error, data) => {
      if (error) throw error;
      if (!data[0]) result(null, "L'utilisateur est incorrect ou n'est pas encore inscrit!");
      else bcrypt.compare(user.pass, data[0].pass, function (err, check) {
        if (err) throw err;
        if (check) {
          if (data[0].isVerified === 1) {
            result(null, data[0]);
          } else result(null, 'Le compte n\'as pas été validé!');
        } else result(null, 'Le mots de passe est incorrect!');
      });
      conn.release();
    }
    );
  });
};

User.register = function (body, result) {
  connection.getConnection(async function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM user WHERE mail = "${body.mail}"`, async (error, data) => {
      if (error) throw error;
      if (data.length <= 0) {
        conn.query(`INSERT INTO user (mail, pass, isAdmin, isCandidat, isRecruteur)
            VALUES ("${body.mail}", "${await bcrypt.hash(body.pass, 10)}", 0, ${body.isCandidat}, ${body.isRecruteur})`,
          (error, newUser) => {
            if (error) throw error;
            conn.query(`INSERT INTO contactProfil (user_id) VALUES (${newUser.insertId})`, (err, profilUser) => {
              if (err) throw err
              else result(null, 'L\'utilisateur a bien été créé. veuillez valider par mail pour pouvoir vous connecter!');
            })
            conn.release();
          }
        );
      } else {
        result(null, 'Adresse mail déjà utilisée!');
      }
    });
  });
};

User.verify = function (data, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`UPDATE user SET isVerified = 1 WHERE mail = '${data.to}'`, (error, info) => {
      if (error) throw error;
      else result(null, 'L\'utilisateur a bien été mis a jour!');
    })
    conn.release();
  })
}

User.changePass = function (body, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM user WHERE mail = "${body.mail}"`, async (error, data) => {
      if (error) throw error;
      if (!data) result(null, "Le mail n'est pas enregistré dans notre base de données!");
      else conn.query(`UPDATE user SET pass = :pass WHERE mail = :mail`,
        { pass: await bcrypt.hash(body.pass, 10), mail: body.mail }, (error, info) => {
          if (error) throw error;
          else result(null, data);
        })
    })
    conn.release();
  })
}

module.exports = User;