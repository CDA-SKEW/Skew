const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");

// Model
const CandidatExperience = function (experience) {
    // this.id = user.id;
    this.user_id = experience.user_id,
        this.compagny = experience.compagny,
        this.job = experience.job,
        this.description = experience.description,
        this.dateStart = experience.dateStart,
        this.dateEnd = experience.dateEnd
};

// Get ID
CandidatExperience.getExperienceProfil = function (id, result) {
    connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
            `SELECT u.id,e.*
            FROM user as u
            INNER JOIN experience as e
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
CandidatExperience.createExperienceProfil = function (newExperience, result) {
    const { compagny, job, description, dateStart, dateEnd, user_id } = newExperience
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO experience
         SET 
         user_id = :user_id,
            compagny = :compagny,
            job = :job,
            description = :description
            
            ;`,
            { compagny, job, description, dateStart, dateEnd, user_id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,e.*
            FROM user as u
            INNER JOIN experience as e
            ON u.id = e.user_id
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
CandidatExperience.updateExperienceProfil = function (experienceObj, result) {
    const { compagny, job, description, dateStart, dateEnd, user_id } = experienceObj
    console.log("edit", experienceObj);
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE experience,user
            SET 
            compagny = :compagny,
            job = :job,
            description = :description,
            dateStart = :dateStart,
            dateEnd = :dateEnd
            WHERE user_id = :user_id;`,
            { compagny, job, description, dateStart, dateEnd, user_id }
            , (error, data) => {
                if (error) throw error;
                conn.query(`SELECT u.id,e.*
            FROM user as u
            INNER JOIN experience as e
            ON u.id = e.user_id
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
CandidatExperience.deleteExperienceProfil = function (id, result, user_id, experience) {
    connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM experience WHERE experience.id = ${id}`, (error, data) => {
            if (error) throw error;
            conn.query(`SELECT u.id,e.*
            FROM user as u
            INNER JOIN experience as e
            ON u.id = e.user_id
            WHERE u.id = :user_id;`, { user_id }, (error, data) => {
                if (error) throw error;
                result(null, data);
                conn.release();
            });
        });
    });
};
module.exports = CandidatExperience;