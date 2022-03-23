const connection = require("../../config/ConnectionDB");

// Model
const Candidat = function (candidat) {
    this.id = candidat.id,
        this.user_id = candidat.user_id,
        this.mail = candidat.mail,
        this.adress = candidat.adress,
        this.zipCode = candidat.zipCode,
        this.town = candidat.town,
        this.phone = candidat.phone
};



// Get All
Candidat.getProfil = function (user_id, result) {

    let Obj = {
        coord: {},
        experience: [],
        skill: [],
        interest: [],
        certificate: [],
        document: [],
    };

    connection.getConnection(function (error, conn) {
        if (error) throw error;

        conn.query(`
            SELECT u.id, u.mail, c.*
                FROM contactProfil as c
                INNER JOIN user as u
                ON c.user_id = u.id
                WHERE u.id = :user_id
            `, { user_id }, (error, data) => {
            if (error) throw error;
            Obj.coord = data[0]

            conn.query(`
                SELECT u.id,e.*
                    FROM user as u
                    INNER JOIN experience as e
                        ON u.id = e.user_id
                            WHERE u.id = :user_id;
                `, { user_id }, (error, data) => {
                if (error) throw error;
                Obj.experience = data

                conn.query(
                    `SELECT u.id,s.*
                FROM user as u
                INNER JOIN skill as s
                ON u.id = user_id
                WHERE u.id = :user_id;`,

                    { user_id }, (error, data) => {
                        if (error) throw error;
                        Obj.skill = data

                        conn.query(
                            `SELECT u.id,i.*
                            FROM user as u
                            INNER JOIN interest as i
                            ON u.id = user_id
                            WHERE u.id = :user_id;`,

                            { user_id }, (error, data) => {
                                if (error) throw error;
                                Obj.interest = data

                                conn.query(
                                    `SELECT u.id,c.*
                     FROM user as u
                     INNER JOIN certificate as c
                     ON u.id = user_id
                     WHERE u.id = :user_id;`,

                                    { user_id },
                                    (error, data) => {
                                        if (error) throw error;
                                        Obj.certificate = data



                                        conn.query(
                                            `SELECT u.id,d.*
                                         FROM user as u
                                         INNER JOIN document as d
                                         ON u.id = user_id
                                         WHERE u.id = :user_id;`,

                                            { user_id },
                                            (error, data) => {
                                                if (error) throw error;
                                                Obj.document = data
                                                result(null, Obj);
                                                conn.release();

                                                // });
                                            });
                                    });
                            });
                    });
            });
        });
    });

};

module.exports = Candidat;