// Import Model
const OffreFavoris = require("../models/OffreFavorisModel");

// Import Module
const jwt = require("jsonwebtoken");

require("dotenv").config();

class FavorisControllers {
    async addFavoris(req, res) {
        try {

        } catch (error) { throw error; }
    }

    async getFavoris(req, res) {
        try {
            console.log('req.params.id', req.params.id)
            OffreFavoris.getOne(req.params.id, (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Une erreur est survenue",
                    });
                } else {
                    return res.send({
                        method: req.method,
                        status: "success",
                        flash: "Get Offre Success !",
                        dbOffresVisiteur: data,
                    });
                }
            });
        } catch (error) { throw error; }
    }
}

module.exports = FavorisControllers;