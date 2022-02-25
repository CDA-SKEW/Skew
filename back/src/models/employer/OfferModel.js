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

async function experience(userIdCandidate, conn, error) {
  // console.log("calling experience function");

  let toto = await Offer.getCandidatExperience(
    userIdCandidate,
    conn,
    error
  ).then((result) => {
    // console.log("result experience function", result);
    return result;
  });
  // console.log("toto", toto);
  return toto;
}

Offer.getCandidatExperience = function (userIdCandidate, conn, error) {
  return new Promise((resolve, reject) => {
    // console.log("userIdCandidate", userIdCandidate);
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
        resolve(dataCvCandidat);
      }
    );
  });
};

Offer.getOfferId = function (params_id) {
  // console.log("model param_id",params_id)

  return new Promise((resolve, reject) => {
    const Obj = {
      profilEmployer: {},
      offers: [],
    };
    connection.getConnection(function (error, conn) {
      // Data Profil Employer
      conn.query(
        `SELECT c.user_id, c.name as nameEmployor, c.badge as badgeEmployor, c.avatar as image
        FROM contactProfil as c
       inner join user as u On c.user_id=u.id
       where c.user_id=:params_id ;`,
        { params_id },
        (error, dataEmployer) => {
          if (error) reject(err);
          else {
            // console.log("dataEmployer",dataEmployer)
            console.log("dataEmployerID", dataEmployer[0].user_id);
            const userEmployerID = dataEmployer[0].user_id;
            Obj.profilEmployer = dataEmployer[0];

            conn.query(
              `SELECT o.offer_id, o.user_id, o.title,o.type,o.period,o.description,o.profil,
                DATEDIFF(now(),o.createDate) as dateOfferDays  
                FROM offre as o
                inner join contactProfil as c On o.user_id=c.user_id
                where o.user_id=:userEmployerID
                ORDER BY o.createDate DESC;
                  `,
              { userEmployerID },
              (err, dataOfferByEmployer) => {
                if (error) reject(err);
                Obj.offers = dataOfferByEmployer;

                if (dataOfferByEmployer.length > 0) {
                  dataOfferByEmployer.map((el, index) => {
                    // console.log("index, el", index, el.offer_id);
                    const offerId = el.offer_id;

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
                      (err, profilCandidate) => {
                        if (error) reject(err);
                        // el.profilCandidate = profilCandidate;
                        console.log(
                          "nb profilCandidate ",
                          profilCandidate.length
                        );

                        el.profilCandidate = profilCandidate;
                        // el.profilCandidate = { profilCandidate, cvCandidate: [] }

                        for (let i = 0; i < profilCandidate.length; i++) {
                          let userIdCandidate = profilCandidate[i].user_id;
                          console.log("userIdCandidate", userIdCandidate);

                          conn.query(
                            `select e.user_id, e.job, e.compagny, e.description, e.dateStart, e.dateEnd
                             FROM experience as e
                             where e.user_id=:userIdCandidate
                            `,
                            { userIdCandidate },
                            (err, dataExperience) => {
                              if (error) reject(err);
                              // console.log(
                              //   "dataExperience " + i,
                              //   dataExperience
                              // );
                              el.profilCandidate.cvCandidat = dataExperience;
                            }
                          )

                          if (i === profilCandidate.length-1 && index === dataOfferByEmployer.length - 1) {
                            console.log("index de fin");
                            resolve(Obj);
                          }

                        }
                      }
                    );
                  });
                  // resolve(Obj);
                } else resolve(dataEmployer);
              }
            );
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
