/*
 * Model de 'Offres'
 ******************************/
const connection = require("../config/ConnectionDB");

// Model
const OffreVisiteur = function (data) {
    this.id = data.id,
        this.name = data.name,
        this.lastname = data.lastname,
        this.town = data.town,
        this.title = data.title,
        this.type = data.type,
        this.period = data.period,
        this.createDate = data.createDate,
        this.avatar = data.avatar,
        this.description = data.description,
        this.profil = data.profil
};

// getAll message

OffreVisiteur.getAll = function (result) {
    connection.getConnection(async function (error, conn) {
        if (error) throw error;
        conn.query(
            `select u.id, c.name, c.lastname, c.town, c.avatar, o.title, o.type, o.period, o.createDate, o.description, o.profil
            from user as u, contactProfil as c, offre as o
            where u.id = c.user_id
            and u.id = o.user_id`, (error, data) => {
            if (error) throw error;
            result(null, data);
            conn.release();
        })
    })
};

module.exports = OffreVisiteur;