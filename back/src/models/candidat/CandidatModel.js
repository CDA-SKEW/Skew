const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");

// Model
const Candidat = function (candidat) {
    this.id = user.id;
    this.user_id = candidat.user_id,
        this.mail = candidat.mail,
        this.adress = candidat.adress,
        this.zipCode = candidat.zipCode,
        this.town = candidat.town,
        this.phone = candidat.phone;
};

// Get All
Candidat.getProfil = function (result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT address, town, zipCode, phone, mail from contactProfil, user`, (error, data) => {
            if (error) throw error;
            result(null, data);
            // Mettre fin à la connexion avec la db
            conn.release();
        });
    });
};

module.exports = Candidat;