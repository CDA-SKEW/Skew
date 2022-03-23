const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");


// Model
const CandidatInterest = function (interest) {
    this.id = Number(interest.id),
        this.user_id = Number(interest.user_id),
        this.interest = String(interest.interest);
};


// Create Interest
CandidatInterest.createInterestProfil = function (newInterest, result) {
    const { interest, user_id } = newInterest
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO interest
         SET 
         user_id = :user_id,
            interest = :interest
            ;`,
            { interest, user_id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,i.*
            FROM user as u
            INNER JOIN interest as i
            ON u.id = i.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                    conn.release();
                });
            }
        );
    });
};


//Delete Interest
CandidatInterest.deleteInterestProfil = function (id, result) {
    connection.getConnection(function (error, conn) {
        conn.query(`select user_id FROM interest WHERE id = ${id}`, (error, skill) => {
            if (error) throw error;
            conn.query(`DELETE FROM interest WHERE id = ${id}`, (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,s.*
                        FROM user as u
                        INNER JOIN interest as s
                        ON u.id = s.user_id
                        WHERE u.id = :user_id;`
                    , { user_id: skill.user_id }, (error, data) => {
                        if (error) throw error;
                        result(null, data);
                        conn.release();
                    });
            });
        });
    });
};
module.exports = CandidatInterest