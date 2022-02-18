const Offer = require("../../models/employer/OfferModel");

require("dotenv").config();

class EmployerCandidateStatutController {
  async getOffer(req, res) {
    console.log("controller get Offer Employeur");
    res.json({ message: "controller get Offer employer" });
  }

  async createOffer(req, res) {
    console.log("controller create offer Employeur");

    if (req.body.user_id) {
      // console.log("post create offer", req.body);
      let offerObj = new Offer({
        ...req.body,
      });
      console.log("post create offer profilUserObj ", offerObj );
      try {
        Offer.createOffer(
          offerObj,
          (err, data) => {
            if (err) {
              console.log("err", err),
                res.status(500).send({
                  message: err.message || "Une erreur est survenue",
                });
            } else {
              return res.json({
                method: req.method,
                status: "success",
                flash: "controller Create offer !",
                message: "controller Create offer",
                offers : data,
              });
            }
          }
        );
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");

    // res.json({ message: "controller Create offer employer" });
  }

  async delOffer(req, res) {
    console.log("controller del offer Employeur");
    res.json({ message: "controller del offer employer" });
  }
}

module.exports = EmployerCandidateStatutController;
