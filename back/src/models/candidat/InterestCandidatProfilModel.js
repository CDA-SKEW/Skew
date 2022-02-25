const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");


// Model
const CandidatInterest = function (interest) {
    this.id = Number(interest.id),
        this.user_id = Number(interest.user_id),
        this.interest = String(interest.interest);
};

//Get Skill 
// CandidatInterest.getInterestProfil = function (id, result) {
//     connection.getConnection(function (error, conn) {
//         if (error) throw error;
//         conn.query(
//             `SELECT u.id,i.*
//             FROM user as u
//             INNER JOIN interest as i
//             ON u.id = user_id
//             WHERE u.id = ${id};`,

//             (error, data) => {
//                 if (error) throw error;
//                 result(null, data);
//                 conn.release();
//             });
//     });
// };

// Create Skill
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

//Update Skill

CandidatInterest.updateInterestProfil = function (interestObj, result) {
    const { interest, user_id, id } = interestObj
    // console.log("edit Interest & id", id, interestObj);
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE interest,user
            SET 
            user_id= :user_id,
            interest = :interest
            WHERE interest.id = :id;`,
            { interest, user_id, id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,i.*
            FROM user as u
            INNER JOIN interest as i
            ON u.id = i.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                });
                conn.release();
            }
        );
    });
};

//Delete Skill
CandidatInterest.deleteInterestProfil = function (id, result, user_id, interest) {
    connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM interest WHERE interest.id = :id`, (error, data) => {
            { user_id, id }
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
        });
    });
};
module.exports = CandidatInterest