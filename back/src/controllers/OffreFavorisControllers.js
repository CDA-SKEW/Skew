// Import Model
const OffreFavoris = require("../models/OffreFavorisModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

class FavorisControllers {
    async addFavoris(req, res) {
        const decoded = jwt.decode(req.headers['authorization'], { complete: true })
        const id = decoded.payload.id
        let newOffreFavoris = new OffreFavoris({
            offre_id: Number(req.body.offer_id),
            user_id: Number(id),
        })
        try {
            OffreFavoris.post(newOffreFavoris, (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Une erreur est survenue",
                    });
                } else {
                    return res.send({
                        method: req.method,
                        status: "success",
                        flash: "Post Offre Success !",
                        dbOffreFavoris: data,
                    });
                }
            });
        } catch (error) { throw error; }
    }

    async getFavoris(req, res) {
        const decoded = jwt.decode(req.headers['authorization'], { complete: true })
        const id = decoded.payload.id
        let newOffreFavoris = new OffreFavoris({
            offre_id: Number(req.params.id),
            user_id: Number(id),
        })
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
                        dbOffreFavoris: data,
                    });
                }
            });
        } catch (error) { throw error; }
    }

    async deleteFavoris(req, res) {
        const decoded = jwt.decode(req.headers['authorization'], { complete: true })
        const id = decoded.payload.id
        let newOffreFavoris = new OffreFavoris({
            offre_id: Number(req.params.id),
            user_id: Number(id),
        })
        try {
            OffreFavoris.delete(newOffreFavoris, (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Une erreur est survenue",
                    });
                } else {
                    return res.send({
                        method: req.method,
                        status: "success",
                        flash: data,
                    });
                }
            });
        } catch (error) { throw error; }
    }
}

module.exports = FavorisControllers;