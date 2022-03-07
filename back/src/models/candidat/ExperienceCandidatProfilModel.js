
const connection = require("../../config/ConnectionDB");
const { user } = require("../../config/db");

// Model
const CandidatExperience = function (experience) {
    this.id = Number(experience.id),
        this.user_id = Number(experience.user_id),
        this.compagny = String(experience.compagny),
        this.job = String(experience.job),
        this.description = String(experience.description),
        this.dateStart = (experience.dateStart),
        this.dateEnd = (experience.dateEnd)
};


// Create Experience
CandidatExperience.createExperienceProfil = function (newExperience, result) {
    const { compagny, job, description, dateStart, dateEnd, user_id, id } = newExperience
    console.log('mlodel create expérience', newExperience)
    connection.getConnection(function (error, conn) {
        conn.query(`
        INSERT INTO experience
         SET 
            user_id = :user_id,
            compagny = :compagny,
            job = :job,
            description = :description,
            dateStart = :dateStart,
            dateEnd = :dateEnd
            ;`,
            { compagny, job, description, dateStart, dateEnd, user_id, id }
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
    const { compagny, job, description, dateStart, dateEnd, user_id, id } = experienceObj
    console.log("edit", experienceObj);
    connection.getConnection(function (error, conn) {
        conn.query(`
        UPDATE experience,user
            SET 
                user_id= :user_id,
                compagny = :compagny,
                job = :job,
                description = :description,
                dateStart = :dateStart,
                dateEnd = :dateEnd
            WHERE experience.id = :id;`,
            { compagny, job, description, dateStart, dateEnd, user_id, id }
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
            }
        );
    });
};

// Delete by ID (row)
CandidatExperience.deleteExperienceProfil = function (id, result, user_id, experience) {
    connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM experience WHERE experience.id = ${id};`, (error, data) => {
            { user_id, id }
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