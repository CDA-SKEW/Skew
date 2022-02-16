const connection = require("../../config/ConnectionDB");

//Model
const ProfilUser = function (profilUser) {
    this.id = profilUser.id,
    this.mail = profilUser.mail

};

console.log("profilUser dans model", ProfilUser)

// Get profil employer User (by id)
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

  // Update mail in profil employer User (by id)
  ProfilUser.editMail = function (profilUserObj,oldMail, result) {
    console.log("edit mail in Model:", "id:", typeof profilUserObj.id, profilUserObj.id, "mail:",profilUserObj.mail ,"oldMail:",oldMail);
    // connection.getConnection(function (error, conn) {
    //   conn.query(`
    //       UPDATE articles 
    //           SET title = '${articleObj.title}',
    //               price = ${articleObj.price}
    //           WHERE id = ${articleObj.id};
    //     `, (error, data) => {
    //       if (error) throw error;
    //       conn.query(`SELECT * FROM articles`, (error, data) => {
    //         if (error) throw error;
    //         result(null, data);
    //       });
    //       conn.release();
    //     }
    //   );
    // });
  }



module.exports = ProfilUser;