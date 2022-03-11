const VisiteurData = require("../models/VisiteurDataModel");

class VisiteurDataControllers {
    async getAllEntrepriseAvatar(req, res) {
        try {
            VisiteurData.getAllEntrepriseAvatar((err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Une erreur est survenue!',
                    });
                } else {
                    return res.send({
                        method: req.method,
                        status: "success",
                        flash: "Get data Success !",
                        dbVisiteurDataEntrepriseAvatar: data,
                    });
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VisiteurDataControllers;