const connection = require("../config/ConnectionDB");
const { user } = require("../config/db");

// Model
const CandidatContact = function (contact) {
    // this.id = user.id;
    this.user_id = contact.user_id,
        this.name = contact.name,
        this.lastName = contact.lastName,
        this.mail = contact.mail,
        this.address = contact.address,
        this.zipCode = contact.zipCode,
        this.town = contact.town,
        this.phone = contact.phone;

};

// Get ID
CandidatContact.getContactProfil = function (id, result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT u.mail, c.town, c.zipCode, c.address, c.phone
            FROM user as u
            INNER JOIN contactProfil as c
            ON id = user_id
            WHERE id = :id;`, { id },

            (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
    });
};

// Edit One
CandidatContact.updateContactProfil = function (candidatObj, result) {
    const { name, lastName, address, zipCode, town, phone, mail, user_id } = candidatObj
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE contactProfil,user
            SET 
            name = :name,
            lastName = :lastName,
            address = :address,
            zipCode = :zipCode,
            town = :town,
            phone = :phone,
            mail = :mail
            WHERE user_id = :user_id;`,
            { name, lastName, address, zipCode, town, phone, mail, user_id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.mail,c.name,c.lastName, c.town, c.zipCode, c.address, c.phone
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