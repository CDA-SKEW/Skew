/*
 * Model de 'Users'
 ******************************/

// Connection à la base de données
const req = require("express/lib/request");
const connection = require("../../config/ConnectionDB");

// Model
const User = function (user) {
  (this.user_id = user.user_id),
    (this.id = user.id),
    (this.name = user.name),
    (this.mail = user.mail),
    (this.pass = user.pass),
    (this.isAdmin = user.isAdmin),
    (this.isCandidat = user.isCandidat),
    (this.isRecruteur = user.isRecruteur),
    (this.isBanned = user.isBanned),
    (this.isVerified = user.isVerified),
    (this.date_create = user.date_create);
};

// Get All Users
User.getListUsers = function (result) {
  console.log("Method getAll Model User");
  // Se connecter à la base de données
  connection.getConnection(function (err, conn) {
    /* Requête SQL pour afficher tous les Users 
    de la table user de la DB Skew */
    conn.query(
      `SELECT u.*, c.name, c.lastname FROM user as u
      INNER JOIN  contactProfil  as c
      ON u.id = c.user_id;
`,
      (error, data) => {
        //   Si erreur l'afficher
        if (error) throw error;
        //   Sinon afficher les datas
        else result(null, data);
      }
    );
    // Stop la function une fois exécutée
    conn.release();
  });
};

// Get One User
// User.getUserId = function (user, result) {
//   // console.log("Method getID Model User", user);
//   const { id } = user;
//   connection.getConnection(function (error, conn) {
//     conn.query(` SELECT * FROM user WHERE id = :id`, { id }, (error, data) => {
//       if (error) throw error;
//       else result(null, data);
//       // console.log("data", data);
//     });
//     conn.release();
//   });
// };

// Update User
User.putUser = function (user, result) {
  console.log("Method UPDATE Model User", user);
  //Declarations des constantes de user pour mysql
  const { id, isAdmin, isBanned, isVerified, isCandidat, isRecruteur } = user;
  connection.getConnection(function (error, conn) {
    console.log(
      "isBanned",
      isBanned,
      "isRecruteur",
      isRecruteur,
      "isVerified",
      isVerified
    );
    //ici on fait la requete SQL avec les datas déclarées en const au début de la fonction
    conn.query(
      `UPDATE user 
      set 
      isBanned = :isBanned,
      isVerified = :isVerified,
      isCandidat = :isCandidat,
      isRecruteur = :isRecruteur
      WHERE id = :id;
       `,
      //ici on déclare les values qui vont être envoyées dans la fonction queryFormat pour la gestion des single quotes
      // situé dans ConnectionDb.js dans dossier config
      { isAdmin, isBanned, isVerified, isCandidat, isRecruteur, id },
      (error, data) => {
        console.log(id, isAdmin, isBanned, isVerified, isCandidat, isRecruteur);
        if (error) throw error;
        conn.query(
          `SELECT u.*, c.name, c.lastname FROM user as u
          INNER JOIN  contactProfil  as c
          ON u.id = c.user_id;
    `,
          (error, data) => {
            //   Si erreur l'afficher
            if (error) throw error;
            //   Sinon afficher les datas
            else result(null, data);
          }
        );
        // if (error) throw error;
        // result(null, data);
        // console.log("data", data);
      }
    );
    conn.release();
  });
};

// Delete User
User.deleteUser = function (user, result) {
  console.log("Method delete Model User", user);
  const { id } = user;
  connection.getConnection(function (error, conn) {
    conn.query(
      ` DELETE contactProfil, user
      FROM contactProfil 
      INNER JOIN user  
      ON id = user_id 
      WHERE id = :id;`,
      { id },
      (error, data) => {
        if (error) throw error;
        conn.query(
          `SELECT u.*, c.name, c.lastname FROM user as u
          INNER JOIN  contactProfil  as c
          ON u.id = c.user_id;
    `,
          (error, data) => {
            //   Si erreur l'afficher
            if (error) throw error;
            //   Sinon afficher les datas
            else result(null, data);
          }
        );
        // console.log('data', data)
      }
    );

    conn.release();
  });
};

// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = User;
