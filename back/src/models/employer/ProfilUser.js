// import module connection de la base de données
const connection = require("../../config/ConnectionDB");

//Creation du Model profilUser pour exporter les fonctions
const ProfilUser = function (profilUser) {
  this.id = profilUser.id, this.mail = profilUser.mail;
};
// console.log("profilUser dans model", ProfilUser);

// Get profil employer User (by id)
ProfilUser.getById = function (id, result) {
  // console.log("model Profiluser", id, result)

  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // si la connection est établie alors on fait la requete Sql,
    // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
    conn.query(
      `SELECT id,mail,date_update, date_create
     FROM user WHERE id = ${id}`,
      (error, data) => {
        if (error) throw error;
        result(null, data);
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// Update mail in profil employer User (by id)
ProfilUser.editMail = function (profilUserObj, oldMail, result) {
  // console.log(
  //   "edit mail in Model:",
  //   "id:",
  //   typeof profilUserObj.id,
  //   profilUserObj.id,
  //   "mail:",
  //   profilUserObj.mail,
  //   "oldMail:",
  //   oldMail
  // );
  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    // ici on fait un update de la colonne mail de la table user par l'ID
    conn.query(
      `
          UPDATE user
              SET mail = '${profilUserObj.mail}'
              WHERE id = ${profilUserObj.id}
        `,
      (error, data) => {
        if (error) throw error;
        // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
        conn.query(
          `SELECT id,mail,date_update, date_create
          FROM user WHERE id = ${profilUserObj.id}`,
          (error, data) => {
            if (error) throw error;
            result(null, data);
          }
        );
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

module.exports = ProfilUser;
