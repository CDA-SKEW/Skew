// Config chai
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();
const expect = chai.expect;
const connection = require("../../src/config/ConnectionDB");
const index = require("../../apiskew");
const path = require("path");
const bcrypt = require("bcrypt");

chai.use(chaiHttp);

/***************
 * users routes
 ***************/

describe("PostulRouteur - Chai", function () {
    let postuled = {};
    let offre = {};
    let user = {};


    // Loop for create Customer before 'it'
    beforeEach(async () => {

        //Creation user dans la table user
        const { mail, pass, isAdmin, isCandidat, isRecruteur, isVerified } = {
            mail: "candidate@candidate.com",
            pass: await bcrypt.hash("rfn2K22$", 10),
            isAdmin: 0,
            isCandidat: 1,
            isRecruteur: 1,
            isVerified: 1
        };

        // Création de l'offre dans la table offre

        const { offer_id, user_id, title, type, period, description } = {
            title: 'ma super offre',
            type: 'CDI',
            period: 'vitam eternam',
            description: 'ma super description'
        };

        connection.getConnection(async function (error, conn) {
            if (error) throw error;

            conn.query(
                `INSERT INTO user (mail,pass,isAdmin,isCandidat,isRecruteur,isVerified)
                    VALUES ("${mail}","${pass}","${isAdmin}","${isCandidat}","${isRecruteur}","${isVerified}")`, (err, data) => {
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
                            console.log('Postulation offre', data)
                            postuled.id = data.insertId
                        });
                    });
            });
        });
    });

    // // Exemple
    it("USER,OFFRE,POSTULATION  : You'r Rock Dude !  😎 🆗", (done) => {
        done();
    });

    /****** Get All Users *******/

    // it(" delete Postulation", function (done) {
    //     this.timeout(0);
    //     id = postuled.id
    //     chai
    //         .request(index.app)
    //         .delete(`/api/candidat/candidatures/${id}`)
    //         .set("Accept", "application/json")
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             console.log("res.body", res.body);
    //             res.should.have.status(200);
    //             res.body.candidatures.should.be.a("object");
    //             done();
    //             console.log("OFFRE POSTULE CANDIDAT DELETE : You'r Rock Dude !  😎 🆗");
    //         });
    // });

    // /****** Get By ID User *******/

    it(" Get By user_id Postulation Candidature", function (done) {
        // Test route Get Id
        this.timeout(0);
        chai
            .request(index.app)
            .get(`/api/candidat/candidatures/${user.id}`)
            .set("Accept", "application/json")
            .end((err, res) => {
                if (err) return done(err);
                console.log("res.body", res.body);
                res.should.have.status(200);
                res.body.candidatures.should.be.a("array");
                // res.body.candidatures.candidature.should.be.a("object");
                done();
                console.log("OFFRE POSTULE CANDIDAT GET ID: You'r Rock Dude !  😎 🆗");
            });
    });

    // /****** Get Update PUT *******/

    it(" Put OFFRE ", function (done) {
        // Test put (ban) user
        const body = {
            compagny: 'EDF',
            job: 'Commercial',
            description: 'Un bon vendeur',
            user_id: 5
        };
        const id = 58

        chai
            .request(index.app)
            .put(`/api/candidat/profil/experience/${id}`)
            .set("Accept", "application/json")
            .send(body)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                done();
                console.log("OFFRE POSTULE CANDIDAT UPDATE : You'r Rock Dude !  😎 🆗");
            });
    });
});

