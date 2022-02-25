const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");


// Model
const CandidatSkill = function (skill) {
    this.id = Number(skill.id),
        this.user_id = Number(skill.user_id),
        this.skill = String(skill.skill);
};

//Get Skill 
// CandidatSkill.getSkillProfil = function (user_id, result) {
//     connection.getConnection(function (error, conn) {
//         if (error) throw error;
//         conn.query(
//             `SELECT u.id,s.*
//             FROM user as u
//             INNER JOIN skill as s
//             ON u.id = user_id
//             WHERE u.id = :user_id;`,

//             { user_id }, (error, data) => {
//                 if (error) throw error;
//                 result(null, data);
//                 conn.release();
//             });
//     });
// };

// Create Skill
CandidatSkill.createSkillProfil = function (newSkill, result) {
    const { skill, user_id } = newSkill
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO skill
         SET 
         user_id = :user_id,
            skill = :skill
            ;`,
            { skill, user_id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,s.*
            FROM user as u
            INNER JOIN skill as s
            ON u.id = s.user_id
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

CandidatSkill.updateSkillProfil = function (skillObj, result) {
    const { skill, user_id, id } = skillObj
    // console.log("edit SKILL & id", id, skillObj);
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE skill,user
            SET 
            user_id= :user_id,
            skill = :skill
            WHERE skill.id = :id;`,
            { skill, user_id, id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,s.*
            FROM user as u
            INNER JOIN skill as s
            ON u.id = s.user_id
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
CandidatSkill.deleteSkillProfil = function (id, result, user_id, skill) {
    connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM skill WHERE skill.id = ${id}`, (error, data) => {
            { user_id, id }
            if (error) throw error;
            conn.query(`SELECT u.id,s.*
            FROM user as u
            INNER JOIN skill as s
            ON u.id = s.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
        });
    });
};
module.exports = CandidatSkill;