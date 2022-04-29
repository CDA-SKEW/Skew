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

Offer.getDashboard = function (params_id, result) {
  // console.log("model getDashboard  param_id", params_id);
  connection.getConnection(function (error, conn) {
    const Obj = {
      offers: [],
    };

    // Data Offre
    conn.query(
      `SELECT o.offer_id, o.user_id, o.title,o.type,o.period,o.description,o.profil,
        DATEDIFF(now(),o.createDate) as dateOfferDays,
        c.user_id, c.name as nameEmployor, c.badge as badgeEmployor, c.avatar as image
        FROM offre as o
        inner join contactProfil as c On o.user_id=c.user_id
        where o.user_id=:params_id;`,
      { params_id },
      (error, dataOffers) => {
        if (error) result(null, { message: "error" });
        if (dataOffers.length > 0) {
          Obj.offers = dataOffers;

          conn.query(
            `SELECT COUNT(*) AS numberOffers
              FROM offre as o
              where o.user_id=:params_id;`,
            { params_id },
            (error, numberOffers) => {
              if (error) result(null, { message: "error" });
              // console.log(numberOffers)
              Obj.numberOffers = numberOffers[0].numberOffers;

              conn.query(
                `SELECT COUNT(*) AS numberCandidate
            FROM offre as o
            inner join postuled as p On o.offer_id=p.offre_id
            where o.user_id=:params_id;`,
                { params_id },
                (error, numberCandidate) => {
                  if (error) result(null, { message: "error" });
                  Obj.numberCandidate = numberCandidate[0].numberCandidate;

                  conn.query(
                    `SELECT COUNT(*) AS numberCandidateNull
                  FROM offre as o
                  inner join postuled as p On o.offer_id=p.offre_id
                  where o.user_id=:params_id and ISNULL(p.statut) = 1;`,
                    { params_id },
                    (error, numberCandidateNull) => {
                      if (error) result(null, { message: "error" });
                      Obj.numberCandidateNull =
                        numberCandidateNull[0].numberCandidateNull;
                      result(null, Obj);
                    }
                  );
                }
              );
            }
          );
        } else result(null, dataOffers);
      }
    );
    conn.release();
  });
};

Offer.getOfferId = async function (params_id, result) {

  const Obj = {
    profilEmployer: {},
    offers: [],
  };

  // Candidat postuled ? pour cet employeur
  const candidatePostuled = await new Promise((resolve, reject) => {
    connection.getConnection(function (error, conn) {
      conn.query(
        `SELECT COUNT(*) AS numberCandidate
                          FROM offre as o
                          inner join postuled as p On o.offer_id=p.offre_id
                          where o.user_id=:params_id;`,
        { params_id },
        (error, NumberCandidatePostuled) => {
          if (error) throw error;
          resolve(NumberCandidatePostuled[0].numberCandidate);
        });
      conn.release();
    });
  }).then(data => { return data })

  // Si aucun candidat qui a postulé pour cet employeur alors:
  if (Number(candidatePostuled) === 0) {

    // Data Profil Employer
    const dataEmployerProfil = await new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `SELECT c.user_id, c.name as nameEmployor, c.badge as badgeEmployor, c.avatar as image
            FROM contactProfil as c
             inner join user as u On c.user_id=u.id
             where c.user_id=:params_id;`,
          { params_id },
          (error, dataEmployer) => {
            if (error) result(null, { message: "error" });
            resolve(dataEmployer);
          });
        conn.release();
      });
    }).then(data => { return data })

    // on creer l'oblet avec les data de l'employeur
    Obj.profilEmployer = dataEmployerProfil[0]

    // Data offer
    const dataOffer = await new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `SELECT o.offer_id, o.user_id, o.title,o.type,o.period,o.description,o.profil,
          DATEDIFF(now(),o.createDate) as dateOfferDays  
          FROM offre as o
          inner join contactProfil as c On o.user_id=c.user_id
          where o.user_id=:params_id
          ORDER BY o.createDate DESC;`,
          { params_id },
          (error, dataOfferByEmployer) => {
            if (error) result(null, { message: "error" });
            resolve(dataOfferByEmployer);
          });
        conn.release();
      });
    }).then(data => { return data })

    Obj.offers = dataOffer;

    // faire un map sur toutes les offres si elles existes et implementer ProfilCandidate en tableau vide sur toutes les offres
    if (dataOffer.length > 0) {
      dataOffer.map((el, indexOffer) => {
        // console.log("el", el)
        el.profilCandidate = []

        // à la fin du map renvoyer l'objet avec tableau vide ProfilCandidate
        if (indexOffer === dataOffer.length - 1) result(null, Obj)
      })
      // si pas d'offres,renvoyer l'objet sans les offres
    } else result(null, dataEmployerProfil)

  } else {
    // Data Profil Employer
    const dataEmployerProfil = await new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `SELECT c.user_id, c.name as nameEmployor, c.badge as badgeEmployor, c.avatar as image
                FROM contactProfil as c
                 inner join user as u On c.user_id=u.id
                 where c.user_id=:params_id;`,
          { params_id },
          (error, dataEmployer) => {
            if (error) result(null, { message: "error" });
            resolve(dataEmployer);
          });
        conn.release();
      });
    }).then(data => { return data })

    // on creer l'oblet avec les data de l'employeur
    Obj.profilEmployer = dataEmployerProfil[0]

    // Data offer
    const dataOffer = await new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `SELECT o.offer_id, o.user_id, o.title,o.type,o.period,o.description,o.profil,
              DATEDIFF(now(),o.createDate) as dateOfferDays  
              FROM offre as o
              inner join contactProfil as c On o.user_id=c.user_id
              where o.user_id=:params_id
              ORDER BY o.createDate DESC;`,
          { params_id },
          (error, dataOfferByEmployer) => {
            if (error) result(null, { message: "error" });
            resolve(dataOfferByEmployer);
          });
        conn.release();
      });
    }).then(data => { return data })

    Obj.offers = dataOffer;

    let number = 0
    // faire un map sur toutes les offres si elles existes et implementer ProfilCandidate en tableau vide sur toutes les offres
    dataOffer.map(async (el, index) => {
      const offerId = el.offer_id;

      // Candidat postuled ? pour cet employeur
      const profilCandidatePostuled = await new Promise((resolve, reject) => {
        connection.getConnection(function (error, conn) {
          conn.query(
            `SELECT p.offre_id, p.user_id
             ,ce.name, ce.lastName, u.mail, ce.phone, ce.address, ce.zipCode, ce.town
             , p.statut
               FROM postuled as p
               inner join user as u On p.user_id=u.id
              inner join contactProfil as ce On u.id=ce.user_id
              where offre_id=:offerId`,
            { offerId },
            (error, profilCandidate) => {
              if (error) throw error;
              resolve(profilCandidate);
            });
          conn.release();
        });
      }).then(data => { return data })

      if (profilCandidatePostuled.length > 0) {
        el.profilCandidate = profilCandidatePostuled;

        profilCandidatePostuled.map(async (elc, index2) => {
          let userIdCandidate = elc.user_id;

          //Data Experience
          const exp = await new Promise((resolve, reject) => {
            connection.getConnection(function (error, conn) {
              conn.query(
                `select e.user_id, e.job, e.compagny, e.description, e.dateStart, e.dateEnd
                                 FROM experience as e
                                 where e.user_id=:userIdCandidate;`,
                { userIdCandidate },
                (error, dataExperience) => {
                  if (error) throw error;
                  resolve(dataExperience);
                }
              );
              conn.release();
            });
          }).then(data => { return data });

          // Data Skill
          const skil = await new Promise((resolve, reject) => {
            connection.getConnection(function (error, conn) {
              conn.query(
                `select * FROM skill WHERE user_id = :userIdCandidate;`,
                { userIdCandidate },
                (error, dataSkill) => {
                  if (error) throw error;
                  let skills = [];
                  for (
                    let index = 0;
                    index < dataSkill.length;
                    index++
                  ) {
                    skills.push(dataSkill[index].skill);
                  }
                  resolve(skills);
                });
              conn.release();
            });
          }).then(data => { return data })

          //  Data interet
          const ints = await new Promise((resolve, reject) => {
            connection.getConnection(function (error, conn) {
              conn.query(
                `select * FROM interest WHERE user_id = :userIdCandidate;`,
                { userIdCandidate },
                (error, dataInterest,) => {
                  if (error) throw error;
                  let interests = [];
                  for (
                    let index = 0;
                    index < dataInterest.length;
                    index++
                  ) {
                    interests.push(
                      dataInterest[index].interest
                    );
                  }

                  resolve(interests);
                  conn.release();
                });
            })
          }).then(data => { return data });

          //Data Certificate
          const certif = await new Promise((resolve, reject) => {
            connection.getConnection(function (error, conn) {
              conn.query(
                `select c.user_id, c.school, c.title, c.year, c.validate
                  FROM certificate as c
                  where c.user_id=:userIdCandidate;`,
                { userIdCandidate },
                (error, dataCertificate) => {
                  if (error) throw error;
                  resolve(dataCertificate);
                }
              );
              conn.release();
            });
          }).then(data => { return data });

          //Data Documents
          const doc = await new Promise((resolve, reject) => {
            connection.getConnection(function (error, conn) {
              conn.query(
                `select  p.pdf ,d.title,d.name,d.document FROM postuled as p
                inner join document as d On p.document_id=d.id_document
               where p.user_id=:userIdCandidate and p.offre_id=:offerId;`,
                { userIdCandidate, offerId },
                (error, dataDocument) => {
                  if (error) throw error;
                  resolve(dataDocument);
                }
              );
              conn.release();
            });
          }).then(data => { return data });

          //création de l'objet cv Candidat associé
          elc.cvCandidat = {
            experience: exp,
            skill: skil,
            interest: ints,
            certificate: certif,
            document: doc,
          }

          if (index2 === profilCandidatePostuled.length - 1) {
            if (number === dataOffer.length - 1) result(null, Obj);
            number++
          }
        })

      } else {
        el.profilCandidate = []
        if (number === dataOffer.length - 1) result(null, Obj);
        number++
      }
    })
  }
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
        conn.query(
          `SELECT offer_id, user_id, title,type,period,description,profil, createDate 
         FROM offre WHERE user_id = :user_id`,
          { user_id },
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

// Delete offer
Offer.deleteOffer = function (id, result) {
  connection.getConnection(function (error, conn) {
    conn.query(
      ` DELETE FROM postuled
      WHERE offre_id  =:id`,
      { id },
      (error, data) => {
        if (error) throw error;
        conn.query(
          ` DELETE FROM offre
            WHERE offer_id  =:id`,
          { id },
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
          }
        );
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

// Plus utlisé dans l'application car getOffer All replace by getOffer id user
// Utiliser pour test postman
// Get Offer
Offer.getOffer = function (result) {
  connection.getConnection(function (error, conn) {
    conn.query(
      `SELECT offer_id, user_id, title,type,period,description,profil, createDate 
      FROM offre`,
      (error, data) => {
        if (error) throw error;
        else result(null, data);
      }
    );
    conn.release();
  });
};

module.exports = { Offer, StatutCandidate };