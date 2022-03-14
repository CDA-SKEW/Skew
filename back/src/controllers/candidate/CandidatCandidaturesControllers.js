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
        // console.log('getCandidature', req.params.id)
        try {
            CandidatCandidatures.getCandidatures(String(req.params.id), (err, data) => {
                console.log("data res", data);
                if (err) {
                    console.log("err", err),
                        res.status(500).send({
                        });
                }
                else {
                    // console.log('res getCandidature', data)
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
}
module.exports = CandidatCandidaturesControllers;