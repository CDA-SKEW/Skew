/*
 * Model de 'Offres'
 ******************************/
const connection = require("../config/ConnectionDB");

// Model
const OffreFavoris = function (data) {
    this.id = data.id,
        this.offer_id = data.offer_id,
        this.user_id = data.user_id,
        this.isFavoris = data.isFavoris
};

// getOne favoris

OffreFavoris.getOne = function (id, result) {
    connection.getConnection(async function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT * FROM favoris WHERE offre_id = ${id};`, (error, data) => {
            if (error) throw error;
            result(null, data[0]);
            conn.release();
        })
    })
};

// Post favoris

// OffreFavoris.post = function (user, data, result) {
//     connection.getConnection(async function (error, conn) {
//         if (error) throw error;
//         conn.query(
//             `INSERT INTO favoris (offre_id, user_id, is_favoris)
//             VALUES ( ${data.offer_id}, ${user.id}, 1)`, (err, favorisdata) => {
//             if (err) throw err
//             else result(null, 'L\'offre est favorite!');
//         })
//         conn.release();
//     })
// }

module.exports = OffreFavoris;