const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");
const CandidatDocument = function (document) {
    this.id_document = Number(document.id),
        this.user_id = Number(document.user_id),
        this.title = String(document.title)

};


// Create Experience
CandidatDocument.createDocumentProfil = function (newDocument, file, result) {
    const { user_id, title } = newDocument
    console.log('mlodel create Document', newDocument, file)
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO document
         SET 
            user_id = :user_id,
            title = :title
            ;`,
            { user_id, title }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,d.*
                FROM user as u
                INNER JOIN document as d
                ON u.id = d.user_id
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
// CandidatExperience.updateExperienceProfil = function (experienceObj, result) {
//     const { compagny, job, description, dateStart, dateEnd, user_id, id } = experienceObj
//     console.log("edit", experienceObj);
//     connection.getConnection(function (error, conn) {
//         conn.query(`
//         UPDATE experience,user
//             SET 
//                 user_id= :user_id,
//                 compagny = :compagny,
//                 job = :job,
//                 description = :description,
//                 dateStart = :dateStart,
//                 dateEnd = :dateEnd
//             WHERE experience.id = :id;`,
//             { compagny, job, description, dateStart, dateEnd, user_id, id }
//             , (error, data) => {
//                 if (error) throw error;
//                 conn.query(`SELECT u.id,e.*
//             FROM user as u
//             INNER JOIN experience as e
//             ON u.id = e.user_id
//             WHERE u.id = :user_id;`, { user_id }, (error, data) => {
//                     if (error) throw error;
//                     result(null, data);
//                 });
//             }
//         );
//     });
// };

// Delete by ID (row)
// CandidatExperience.deleteExperienceProfil = function (id, result, user_id, experience) {
//     connection.getConnection(function (error, conn) {
//         conn.query(`DELETE FROM experience WHERE experience.id = ${id};`, (error, data) => {
//             { user_id, id }
//             if (error) throw error;
//             conn.query(`SELECT u.id,e.*
//             FROM user as u
//             INNER JOIN experience as e
//             ON u.id = e.user_id
//             WHERE u.id = :user_id;`, { user_id }, (error, data) => {
//                 if (error) throw error;
//                 result(null, data);
//                 conn.release();
//             });
//         });
//     });
// };
module.exports = CandidatDocument;