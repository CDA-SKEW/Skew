// Import Model
const req = require("express/lib/request");
const CandidatCandidatures = require("../../models/candidat/CandidatureModel");
// Import Module

require("dotenv").config();

class CandidatCandidaturesControllers {
    // #######################
    // # CANDIDATURE COMPLET #
    // #######################

    // CANDIDAT CANDIDATURES GET ALL DATA

    async getCandidatures(req, res) {
        try {
            CandidatCandidatures.getCandidatures(String(req.params.id), (err, data) => {
                console.log("data res", data);
                if (err) {
                    console.log("err", err),
                        res.status(500).send({
                        });
                }
                else {
                    return res.json({
                        method: req.method,
                        candidatures: data,
                    });
                }
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteCandidatures(req, res) {
        try {
            CandidatCandidatures.deleteCandidatures(req.params.id, (err, data) => {
                if (err) res.send(err);
                else {
                    return res.send({
                        method: req.method,
                        // message: 'user deleted !',
                        candidatures: data,
                    });
                }
            });
        } catch (error) {
            throw error;
        }
    }

}
module.exports = CandidatCandidaturesControllers;