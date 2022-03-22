/*
 * Model de 'Offres'
 ******************************/
const connection = require("../config/ConnectionDB");

// Model
const OffreFavoris = function (data) {
    this.id = data.id,
        this.offre_id = data.offre_id,
        this.user_id = data.user_id,
        this.is_favoris = data.is_favoris
};

// getOne favoris

OffreFavoris.getOne = function (newFavoris, result) {
    connection.getConnection(async function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT * FROM favoris WHERE offre_id = ${newFavoris.offre_id} AND user_id = ${newFavoris.user_id};`, (error, data) => {
                if (error) throw error;
                result(null, data[0]);
                conn.release();
            })
    })
};

// Post favoris

OffreFavoris.post = function (newFavoris, result) {
    connection.getConnection(async function (error, conn) {
        if (error) throw error;
        conn.query(
            `INSERT INTO favoris (offre_id, user_id, is_favoris) VALUES ( ${newFavoris.offre_id}, ${newFavoris.user_id}, 1);`
            , (err, favorisdata) => {
                if (err) throw err
                else result(null, 'L\'offre est favorite!');
            })
        conn.release();
    })
}

// Delete favoris

OffreFavoris.delete = function (newFavoris, result) {
    connection.getConnection(async function (error, conn) {
        if (error) throw error;
        conn.query(
            `DELETE FROM favoris WHERE offre_id = ${newFavoris.offre_id} AND user_id = ${newFavoris.user_id};`
            ,(err, favorisdata) => {
                if (err) throw err
                else result(null, 'L\'offre favorite est supprimée')
            }
        )
    })
}

module.exports = OffreFavoris;