// Import Model
const OffreFavoris = require("../models/OffreFavorisModel");

// Import Module
const jwt = require("jsonwebtoken");

require("dotenv").config();

class FavorisControllers {
    async addFavoris(req, res) {
        let newOffreFavoris = new OffreFavoris ({
            offre_id: Number(req.params.id),
            user_id: Number(req.body.user_id),
            is_favoris: Number(req.body.is_favoris),
        })
        console.log('newOffreFavoris', newOffreFavoris)
        try {
            OffreFavoris.post(newOffreFavoris, (err, data) => {
                if (err) res.send(err);
                return res.send ({
                    method: req.method,
                    status: 'success',
                    flash: 'Create favoris Success !',
                    dbMessages: data,
                })
            })
        } catch (error) { throw error; }
    }

    async getFavoris(req, res) {
        try {
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