// import module connection de la base de données
const connection = require("../../config/ConnectionDB");

//Creation du Constructeur profilUser pour exporter les fonctions dans ce model model
const Offer = function (offer) {
  (this.user_id = Number(offer.user_id)),
    (this.title = String(offer.title)),
    (this.type = String(offer.type)),
    (this.period = Number(offer.period)),
    (this.description = String(offer.description)),
    (this.profil = String(offer.profil));
};

const StatutCandidate = function (statutCandidate) {
  (this.user_id = Number(statutCandidate.user_id)),
    (this.offre_id = Number(statutCandidate.offre_id)),
    (this.statut = Number(statutCandidate.statut));
};

// Get Offer
Offer.getOffer = function (result) {
  // console.log("Method delete Model User", user);
  connection.getConnection(function (error, conn) {
    conn.query(
      `SELECT offer_id, user_id, title,type,period,description,profil, createDate 
      FROM offre`,
      (error, data) => {
        if (error) throw error;
        else result(null, data);
        // console.log('data', data)
      }
    );
    conn.release();
  });
};

Offer.getOfferId = function (params_id) {
  // console.log("model param_id",params_id)
  return new Promise((resolve, reject) => {
    connection.getConnection(function (error, conn) {
      conn.query(
        `SELECT o.offer_id, o.user_id, o.title,o.type,o.period,o.description,o.profil,
      c.name as nameEmployor,DATEDIFF(now(),o.createDate) as dateOfferDays,
       c.badge as badgeEmployor, c.avatar as image
        FROM offre as o
      inner join contactProfil as c On o.user_id=c.user_id
      where o.user_id=:params_id 
       ORDER BY o.createDate DESC;`,
        { params_id },
        (error, dataOffer) => {
          if (error) reject(err);
          else {
            // console.log(dataOffer)
            if (dataOffer.length > 0) {
              conn.query(
                dataOffer.map((el, index) => {
                  const offerId = el.offer_id;

                  console.log("dataOffer", index);

                  conn.query(
                    `SELECT p.offre_id, p.user_id
                ,ce.name, ce.lastName, u.mail, ce.phone, ce.address, ce.zipCode, ce.town
                , p.statut
                FROM postuled as p
                inner join user as u On p.user_id=u.id
                inner join contactProfil as ce On u.id=ce.user_id
                 where offre_id=:offerId
              `,
                    { offerId },
                    (err, dataCandidate) => {
                      if (error) reject(err);
                      // console.log("postuled data", dataOffer, index, dataCandidate)

                      dataCandidate.forEach((el) => {
                        console.log(
                          "el",
                          "-------------------------",
                          // el,
                          "-------------------------"
                        );

                        let toto = new Promise((resolve, reject) => {
                          const userIdCandidate = el.user_id;
                          console.log(userIdCandidate);

                          conn.query(
                            `SELECT e.*
                            FROM experience as e
                            where user_id=:userIdCandidate
                          `,
                            { userIdCandidate },
                            (err, dataCvCandidat) => {
                              if (error) reject(err);
                              // console.log("dataCvCandidat data", dataCvCandidat);
                              // console.log("el.exp", el.experience);
                              // console.log(dataCvCandidat);
                              return resolve(dataCvCandidat);
                            }
                          );
                        })
                        console.log(toto);
                        el.experience = toto


                        // let Obj = Offer.getOfferCvCandidate(el.user_id, conn, error).then(
                        //   (dataCvCandidate) => {
                        //     // console.log("dataCVCandidate", dataCvCandidate);
                        //     let Obj=dataCvCandidate  
                        //    return Obj                                            
                        //   });

                        // console.log(" Obj ",  Obj );
                        // el.experience =  Obj 

                      });

                      el.profilCandidate = dataCandidate;
                      if (index === dataOffer.length - 1) resolve(dataOffer);
                    }
                  );
                })
              );
            } else resolve(dataOffer);
          }
        }
      );
      conn.release();
    });
  });
};

//create offer
Offer.createOffer = function (offerObj, result) {
  // //Declarations des constantes de profilUserCompagnyObj pour mysql
  const { user_id, title, type, period, description, profil } = offerObj;
  connection.getConnection(function (error, conn) {
    conn.query(
      `INSERT INTO offre SET
      user_id=:user_id,
      title=:title,
      type=:type,
      period=:period,
      description=:description,
      profil=:profil
        `,
      { user_id, title, type, period, description, profil },
      (error, data) => {
        if (error) throw error;
        // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
        conn.query(
          `SELECT offer_id, user_id, title,type,period,description,profil, createDate 
         FROM offre WHERE user_id = :user_id`,
          { user_id },
          (error, data) => {
            if (error) throw error;
            result(null, data);
            // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
          }
        );
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// Delete offer
Offer.deleteOffer = function (id, result) {
  // console.log("Method delete Model User", user);
  connection.getConnection(function (error, conn) {
    conn.query(
      ` DELETE FROM offre
      WHERE offer_id  =:id`,
      { id },
      (error, data) => {
        if (error) throw error;
        // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
        conn.query(
          `SELECT offer_id, user_id, title,type,period,description,profil, createDate 
         FROM offre`,
          (error, data) => {
            if (error) throw error;
            result(null, data);
            // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
          }
        );
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// update statut candidat
StatutCandidate.updateCandidate = function (statutCandidateObj, result) {
  const { offre_id, statut, user_id } = statutCandidateObj;

  connection.getConnection(function (error, conn) {
    conn.query(
      `
      UPDATE postuled 
      SET  statut= :statut
      WHERE user_id = :user_id AND offre_id=:offre_id;
    `,
      { statut, user_id, offre_id },
      (error, data) => {
        if (error) throw error;
        conn.query(
          `SELECT offer_id, user_id, title,type,period,description,profil, createDate 
         FROM offre`,
          (error, data) => {
            if (error) throw error;
            result(null, data);
          }
        );
        conn.release();
      }
    );
  });
};

// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = { Offer, StatutCandidate };
