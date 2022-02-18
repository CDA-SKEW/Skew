// import module connection de la base de données
const connection = require("../../config/ConnectionDB");

//Creation du Constructeur profilUser pour exporter les fonctions dans ce model model
const Offer = function (offer) {
  (this.user_id = offer.user_id),
    (this.title = offer.title),
    (this.type = offer.type),
    (this.period = offer.period),
    (this.description = offer.description),
    (this.profile = offer.profile)
};

Offer.createOffer = function (offerObj, result) {
  // //Declarations des constantes de profilUserCompagnyObj pour mysql
  const {
    user_id,
    title,
    type,
    period,
    description,
    profile
  } = offerObj;
  // connection.getConnection(function (error, conn) {
  //   conn.query(
  //     `INSERT INTO contactProfil SET
  //     user_id=:user_id,
  //     name=:name,
  //     address=:address,
  //     town=:town,
  //     zipCode=:zipCode,
  //     avatar=:avatar,
  //     siret=:siret,
  //     siren=:siren,
  //     category=:category
  //       `,
  //     { user_id,title,type,period,description,profile },
  //     (error, data) => {
  //       if (error) throw error;
  //       // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
  //       conn.query(
  //         `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
  //        FROM contactProfil WHERE user_id = :user_id`,
  //         { user_id },
  //         (error, data) => {
  //           if (error) throw error;
  //           result(null, data);
  //           // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
  //         }
  //       );
  //       // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
  //       conn.release();
  //     }
  //   );
  // });
};

// Delete User
Offer.deleteOffer = function (user, result) {
  // // console.log("Method delete Model User", user);
  // connection.getConnection(function (error, conn) {
  //   conn.query(
  //     ` DELETE FROM user
  //   WHERE id  = "${user.id}"`,
  //     (error, data) => {
  //       if (error) throw error;
  //       else result(null, data);
  //       // console.log('data', data)
  //     }
  //   );
  //   conn.release();
  // });
};

// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = Offer;
