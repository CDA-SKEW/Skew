const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");

// Model
const CandidatCertificate = function (certificate) {
    this.id = Number(certificate.id);
    this.user_id = Number(certificate.user_id),
        this.school = String(certificate.school),
        this.title = String(certificate.title),
        this.year = (certificate.year),
        this.validate = Number(certificate.validate)
};

// Get ID
CandidatCertificate.getCertificateProfil = function (id, result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT u.id,c.*
            FROM user as u
            INNER JOIN certificate as c
            ON u.id = user_id
            WHERE u.id = ${id};`,

            (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
    });
};

// Create Experience
CandidatCertificate.createCertificateProfil = function (newCertificate, result) {
    const { school, title, year, validate, user_id } = newCertificate
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO certificate
         SET 
         user_id = :user_id,
            school = :school,
            title = :title,
            year = :year,
            validate = :validate
            ;`,
            { school, title, year, validate, user_id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,c.*
            FROM user as u
            INNER JOIN certificate as c
            ON u.id = c.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                    conn.release();
                });
            }
        );
    });
};

// // Edit One
CandidatCertificate.updateCertificateProfil = function (certificateObj, result) {
    const { school, title, year, validate, user_id, id } = certificateObj
    console.log("edit", certificateObj);
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE certificate,user
            SET 
            user_id= :user_id,
            school = :school,
            title = :title,
            year = :year,
            validate = :validate
            WHERE certificate.id = :id;`,
            { school, title, year, validate, user_id, id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,c.*
            FROM user as u
            INNER JOIN certificate as c
            ON u.id = c.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                });
                conn.release();
            }
        );
    });
};

// Delete by ID (row)
CandidatCertificate.deleteCertificateProfil = function (id, result, user_id, experience) {
    connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM certificate WHERE certificate.id = ${id}`, (error, data) => {
            { user_id, id }
            if (error) throw error;
            conn.query(`SELECT u.id,c.*
            FROM user as u
            INNER JOIN certificate as c
            ON u.id = c.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
        });
    });
};
module.exports = CandidatCertificate;