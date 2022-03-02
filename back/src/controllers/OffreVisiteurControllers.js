const OffreVisiteur = require("../models/OffreVisiteurModel");

class OffreVisiteurControllers {
    async getAll(req, res) {
        try {
            OffreVisiteur.getAll((err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Une erreur est survenue",
                    });
                } else {
                    return res.send({
                        method: req.method,
                        status: "success",
                        flash: "Get Offres Success !",
                        dbOffresVisiteur: data,
                    });
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OffreVisiteurControllers;