// Import Model
const OffreFavoris = require("../models/OffreFavorisModel");

require("dotenv").config();

class FavorisControllers {
    async addFavoris(req, res) {
        let newOffreFavoris = new OffreFavoris({
            offre_id: Number(req.params.id),
            user_id: Number(req.body.user_id),
        })
        try {
            OffreFavoris.post(newOffreFavoris, (err, data) => {
                if (err) res.send(err);
                return res.send({
                    method: req.method,
                    status: 'success',
                    flash: 'Create favoris Success !',
                    dbOffreFavoris: data,
                })
            })
        } catch (error) { throw error; }
    }

    async getFavoris(req, res) {
        let newOffreFavoris = new OffreFavoris({
            offre_id: Number(req.params.id),
            user_id: Number(req.body.user_id),
        })
        console.log('req.body.id', req.body)
        try {
            OffreFavoris.getOne(newOffreFavoris, (err, data) => {
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

    async deleteFavoris(req, res) {
        let newOffreFavoris = new OffreFavoris({
            offre_id: Number(req.params.id),
            user_id: Number(req.body.user_id),
        })
        try {
            OffreFavoris.delete(newOffreFavoris, (err,data) => {
                return res.send({
                    method: req.method,
                    status: 'success',
                    flash: 'Delete favoris Success !',
                    dbOffreFavoris: data,
                })
            })
        } catch (error) { throw error; }
    }
}

module.exports = FavorisControllers;