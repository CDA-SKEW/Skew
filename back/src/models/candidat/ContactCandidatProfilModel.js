const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");

// Model
const CandidatContact = function (candidat) {

    this.id = Number(candidat.id),
        this.user_id = Number(candidat.user_id),
        this.name = String(candidat.name),
        this.lastName = String(candidat.lastName),
        this.mail = String(candidat.mail),
        this.address = String(candidat.address),
        this.zipCode = Number(candidat.zipCode),
        this.town = String(candidat.town),
        this.phone = candidat.phone

};


// Edit One
CandidatContact.updateContactProfil = function (candidatObj, result) {
    const { name, lastName, address, zipCode, town, phone, mail, user_id, id } = candidatObj
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE contactProfil, user as u
            SET 
            name = :name,
            lastName = :lastName,
            address = :address,
            zipCode = :zipCode,
            town = :town,
            phone = :phone,
            mail = :mail
            WHERE id = :user_id;`,
            { name, lastName, address, zipCode, town, phone, mail, user_id, id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,c.user_id, u.mail,c.name,c.lastName, c.town, c.zipCode, c.address, c.phone
            FROM user as u
            INNER JOIN contactProfil as c
            ON id = user_id
            WHERE id = :user_id;`, { user_id }, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                });
                conn.release();
            }
        );
    });
};
module.exports = CandidatContact;