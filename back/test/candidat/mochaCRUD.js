// Config chai
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const should = require("chai").should();
// const expect = chai.expect;
const connection = require("../../src/config/ConnectionDB");
// const index = require("../../apiskew");
const assert = require("assert");
const path = require("path");
const bcrypt = require("bcrypt");
const moment = require("moment");
// 
// chai.use(chaiHttp);

describe("PostulRouteur - MOCHA", function () {
    // this.timeout(0);
    let postuled = {};
    let offre = {};
    let user = {};


    // Loop for create Customer before 'it'
    beforeEach(async () => {

        //Creation user dans la table user
        const { mail, pass, isAdmin, isCandidat, isRecruteur } = {
            mail: "test1" + Date.now() + "@test1.test1",
            pass: await bcrypt.hash("test1", 10),
            isAdmin: 0,
            isCandidat: 1,
            isRecruteur: 1
        };

        // Création de l'offre dans la table offre

        const { title, type, period, description } = {
            title: 'ma super offre',
            type: 'CDI',
            period: 'vitam eternam',
            description: 'ma super description'
        };

        connection.getConnection(async function (error, conn) {
            if (error) throw error;

            conn.query(
                `INSERT INTO user (mail,pass,isAdmin,isCandidat,isRecruteur)
                    VALUES ("${mail}","${pass}","${isAdmin}","${isCandidat}","${isRecruteur}")`, (err, data) => {
                if (err) throw err;
                // console.log('Creation User', data)
                user.id = data.insertId

                conn.query(
                    `INSERT INTO offre (user_id,title,type,period,description) 
                        VALUES ( "${user.id}","${title}","${type}","${period}","${description}")`,
                    (err, data) => {
                        if (err) throw err;
                        // console.log('Creation offre', data)
                        offre.id = data.insertId

                        conn.query(
                            `INSERT INTO postuled (offre_id,user_id,statut)
                                VALUES ("${offre.id}","${user.id}", 1)`, (err, data) => {
                            if (err) throw err;
                            // console.log('Postulation offre', data)
                            postuled.id = data.insertId
                        });
                    });
            });
        });
    });

    // // Exemple
    // it("USER,OFFRE,POSTULATION  : You'r Rock Dude !  😎 🆗", (done) => {
    //     done();
    // });

    /****** Get All Users *******/

    // Get ALL Users
    it("GET ALL || POSTULED", (done) => {
        let sql = `SELECT * FROM postuled`;
        connection.getConnection(async function (error, conn) {
            if (error) throw error;
            conn.query(sql, (err, data) => {
                if (err) console.log(err);
                console.log("GET ALL POSTULATION  : You'r Rock Dude !  😎 🆗", data);
                assert(data);
                done();
            });
        });
    });

    //     // /****** Get By ID User *******/

    it("GET by id || COORD CANDIDAT", (done) => {
        let sql = `SELECT u.id, u.mail, c.*
            FROM contactProfil as c
                INNER JOIN user as u
                ON c.user_id = u.id
                WHERE u.id =  ${user.id}
                
            `;
        connection.getConnection(async function (error, conn) {
            if (error) throw error;
            conn.query(sql, (err, data) => {
                if (err) console.log(err);
                console.log("GET ID COORD CANDIDAT  : You'r Rock Dude !  😎 🆗", data);
                assert(data);
                done();
            });
        });
    });

    //     // /****** Get Update PUT *******/

    it("PUT by id || EXPERIENCE CANDIDAT", (done) => {
        const date = moment(Date.now()).format("YYYY-MM-DDTHH:mm:ss")
        const { compagny, job, description, user_id, dateStart, dateEnd, id } = {
            compagny: "EDF",
            job: "Commercial",
            description: "Un bon vendeur",
            user_id: 5,
            dateStart: date,
            dateEnd: date,
            id: 58
        }


        connection.getConnection(async function (error, conn) {
            if (error) throw error;
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
                { compagny, job, description, dateStart, dateEnd, user_id, id },
                (err, data) => {
                    if (err) console.log(err);
                    console.log("PUT EXPERIENCE CANDIDAT  : You'r Rock Dude !  😎 🆗", data);
                    assert(data);
                    done();
                });
        });
    });

    it("DELETE by id || EXPERIENCE CANDIDAT", (done) => {
        id = postuled.id
        // this.timeout(0);
        connection.getConnection(function (error, conn) {
            if (error) throw error
            conn.query(`DELETE FROM postuled WHERE id = ${id}`, (error, data) => {
                if (error) console.log(error);
                console.log("DELETE EXPERIENCE : You'r Rock Dude !  😎 🆗", data);
                assert(data);
                done();
            });
        });
    });

    it("POST ||  EXPERIENCE CANDIDAT", (done) => {
        // this.timeout(0);
        const date = moment(Date.now()).format("YYYY-MM-DDTHH:mm:ss")
        const { compagny, job, description, user_id, dateStart, dateEnd } = {
            compagny: "EDF",
            job: "Commercial",
            description: "Un bon vendeur",
            user_id: 5,
            dateStart: date,
            dateEnd: date,
        }


        connection.getConnection(async function (error, conn) {
            if (error) throw error;
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
                { compagny, job, description, dateStart, dateEnd, user_id, id },
                (err, data) => {
                    if (err) console.log(err);
                    console.log("POST EXPERIENCE CANDIDAT  : You'r Rock Dude !  😎 🆗", data);
                    assert(data);
                    done();
                });
        });
    });
});

