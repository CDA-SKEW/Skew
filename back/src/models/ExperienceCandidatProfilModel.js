const connection = require("../config/ConnectionDB");
const { user } = require("../config/db");

// Model
const CandidatExperience = function (candidat) {
    // this.id = user.id;
    this.user_id = candidat.user_id,
        this.job = candidat.job,
        this.compagny = candidat.compagny,
        this.description = candidat.description,
        this.dateStart = candidat.dateStart,
        this.dateEnd = candidat.dateEnd;
};

// Get ID
CandidatExperience.getExperienceProfil = function (result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT *
            FROM experience`,

            (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
    });
};

// Edit One
// CandidatExperience.updateExperienceProfil = function (candidatObj, result) {
//     const { job, compagny, description, dateStart, dateEnd } = candidatObj
//     connection.getConnection(function (error, conn) {
//         conn.query(`
//         UPDATE experience
//             SET 
//             job = :job,
//             compagny = :compagny,
//             description = :description,
//             dateStart = :dateStart,
//             dateEnd = :dateEnd,
//             WHERE user_id = :user_id;`,
//             { job, compagny, description, dateStart, dateEnd, user_id }
//             , (error, data) => {
//                 if (error) throw error;
//                 conn.query(`SELECT *
//             FROM experience `, (error, data) => {
//                     if (error) throw error;
//                     result(null, data);
//                 });
//                 conn.release();
//             }
//         );
//     });
// };
module.exports = CandidatExperience;