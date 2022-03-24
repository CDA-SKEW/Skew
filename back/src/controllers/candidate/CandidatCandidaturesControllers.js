// Import Model
const req = require("express/lib/request");
const { CandidatCandidatures, CandidatPostuled } = require("../../models/candidat/CandidatureModel");
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

    // POst candidature
    async postCandidatures(req, res) {
        let candidatPostuledObj;

        console.log('Cv', req.body);
        if (req.body.document_id && req.body.offre_id && req.body.user_id) {
            candidatPostuledObj = new CandidatPostuled({
                ...req.body,
            });
            try {
                CandidatPostuled.postCandidatures(req.body, (err, data) => {
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
        } else {
            res.status(500).json({
            });
        }
    }

    // ############################

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