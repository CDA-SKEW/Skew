/*
 * Model de 'VisiteurData'
 ******************************/
const connection = require("../config/ConnectionDB");

// Model
const VisiteurData = function (data) {
    this.id = data.id,
        this.user_id = data.user_id,
        this.avatar = data.avatar,
        this.isRecruteur = data.isRecruteur
};

// GetAll avatar

VisiteurData.getAllEntrepriseAvatar = function (result) {
    connection.getConnection(async function (error, conn) {
        if (error) throw error;
        conn.query(
            `select c.avatar, c.user_id, u.id, u.isRecruteur
            from  contactProfil as c, user as u
            where u.id = c.user_id
            and u.isRecruteur = 1`, (error, data) => {
            if (error) throw error;
            result(null, data);
            conn.release();
        })
    })
}

module.exports = VisiteurData;