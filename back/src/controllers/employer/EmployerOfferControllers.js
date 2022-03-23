const { Offer, StatutCandidate } = require("../../models/employer/OfferModel");
const nodemailer = require("../../config/nodemailer");
const jwt = require("jsonwebtoken");
const checkValidContentToken = require("../../utils/checkValidContentToken");

class EmployerOfferControllers {
  //action GetDashboard by User id
  async getDashboard(req, res) {
    const decoded = jwt.decode(req.headers['authorization'], {complete: true})
    const id= decoded.payload.id
    if (id) {
      try {
        Offer.getDashboard(String(id), async (err, data) => {
          if (err) {
            console.log("err", err),
              res.status(500).send({
                message: err.message || "Une erreur est survenue",
              });
          } else {
            return res.json({
              method: req.method,
              status: "success",
              message: "info dashboard",
              dashboard: data,
              token:await checkValidContentToken.validContentToken(decoded.payload.mail, decoded.payload)
            });
          }
        });
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  //action GetOffer by User id
  async getOfferId(req, res) {
    const decoded = jwt.decode(req.headers['authorization'], {complete: true})
    const id= decoded.payload.id
    if (id) {
      try {
        Offer.getOfferId(String(id), async (err, data) => {
          if (err) {
            console.log("err", err),
              res.status(500).send({
                message: err.message || "Une erreur est survenue",
              })
          } else {
            return res.json({
              method: req.method,
              status: "success",
              message: "Mes offres",
              offers: data,
              token:await checkValidContentToken.validContentToken(decoded.payload.mail, decoded.payload)
            });
          }
        });
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  async createOffer(req, res) {
    const decoded = jwt.decode(req.headers['authorization'], {complete: true})
    const id= decoded.payload.id
    if (id) {
      let offerObj = new Offer({
        ...req.body,
        user_id: id
      });
      try {
        Offer.createOffer(offerObj, async (err, data) => {
          if (err) {
            console.log("err", err),
              res.status(500).send({
                message: err.message || "Une erreur est survenue",
              });
          } else {    
            return res.json({
              method: req.method,
              status: "success",
              message: "Votre offre a bien été publiée !",
              offers: data,
              token:await checkValidContentToken.validContentToken(decoded.payload.mail, decoded.payload)
            });
          }
        });
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  async delOffer(req, res) {
    const decoded = jwt.decode(req.headers['authorization'], {complete: true})
    try {
      Offer.deleteOffer(String(req.params.id), async (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            status: "success",
            flash: "Del offer By Id !",
            message: "Votre offre a bien été supprimée !",
            offers: data,
            token:await checkValidContentToken.validContentToken(decoded.payload.mail, decoded.payload)
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async updateCandidate(req, res) {
    const decoded = jwt.decode(req.headers['authorization'], {complete: true})

    if (req.params.id && req.body.offer_id) {
      let isRetainLet;
      if (Boolean(req.body.isRetain) === true) isRetainLet = 1;
      if (Boolean(req.body.isRetain) === false) isRetainLet = 0;

      let statutCandidateObj = new StatutCandidate({
        user_id: req.params.id,
        offre_id: req.body.offer_id,
        statut: isRetainLet,
      });

      try {
        StatutCandidate.updateCandidate(statutCandidateObj, async (err, data) => {
          if (err) {
            console.log("err", err),
              res.status(500).send({
                message: err.message || "Une erreur est survenue",
              });
          } else {
            return res.json({
              method: req.method,
              status: "success",
              message: "Le status du candidat pour cette offre a été changé",
              offers: data,
              token:await checkValidContentToken.validContentToken(decoded.payload.mail, decoded.payload)
            });
          }
        });
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  async createMessageCandidate(req, res) {
    if (req.body.user_id) {
      nodemailer.SendEmailCandidate(req, res);
    } else res.json("Error Request");
  }

  // Plus utlisé dans l'application car getOffer All replace by getOffer id user
  // Utiliser pour test postman
  //action GetOffer All
  async getOffer(req, res) {

    try {e
      Offer.getOffer((err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            status: "success",
            message: "Toutes les offres",
            offers: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmployerOfferControllers;
