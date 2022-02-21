const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");


// Model
const CandidatSkill = function (skill) {
    // this.id = user.id;
    this.user_id = skill.user_id,
        this.skill = skill.skill
};

//Get Skill 
CandidatSkill.getSkillProfil = function (id, result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT u.id,s.*
            FROM user as u
            INNER JOIN skill as s
            ON u.id = user_id
            WHERE u.id = ${id};`,

            (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
    });
};

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
    const { skill, user_id } = skillObj
    console.log("edit", skillObj);
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE skill,user
            SET 
            skill = :skill
            WHERE user_id = :user_id;`,
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
                });
                conn.release();
            }
        );
    });
};
module.exports = CandidatSkill;