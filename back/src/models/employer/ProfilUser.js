const connection = require("../../config/ConnectionDB");

//Model
const ProfilUser = function (profilUser) {
    this.id = profilUser.id,
    this.mail = profilUser.mail,
    this.pass = profilUser.pass;

};

console.log("profilUser dans model", ProfilUser)

// Get All
ProfilUser.getById = function (id,result) {
    // console.log("model Profiluser", id, result)
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT id,mail,date_update, "date_create"
     FROM user WHERE id = ${ id }`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

module.exports = ProfilUser;