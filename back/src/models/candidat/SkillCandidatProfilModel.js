const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");


// Model
const CandidatSkill = function (skill) {
    this.id = Number(skill.id),
        this.user_id = Number(skill.user_id),
        this.skill = String(skill.skill);
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


//Delete Skill
CandidatSkill.deleteSkillProfil = function (id, result) {
    // console.log('model skill delete id', id)

    connection.getConnection(function (error, conn) {
        conn.query(`select user_id FROM skill WHERE id = ${id}`, (error, skill) => {
            if (error) throw error;
            conn.query(`DELETE FROM skill WHERE id = ${id}`, (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,s.*
                        FROM user as u
                        INNER JOIN skill as s
                        ON u.id = s.user_id
                        WHERE u.id = :user_id;`
                    , { user_id: skill.user_id }, (error, data) => {
                        if (error) throw error;
                        console.log('model skill delete data', data)
                        result(null, data);
                        conn.release();
                    });
            });
        });
    });
};
module.exports = CandidatSkill;