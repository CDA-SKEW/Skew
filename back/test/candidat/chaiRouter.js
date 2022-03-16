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
        const { mail, pass, isAdmin, isCandidat, isRecruteur } = {
            mail: "test1" + Date.now() + "@test1.test1",
            pass: await bcrypt.hash("test1", 10),
            isAdmin: 0,
            isCandidat: 1,
            isRecruteur: 1
        };

        // Création de l'offre dans la table offre 
        const { offer_id, user_id, title, type, period, description } = {
            // offer_id: 26,
            // user_id: 25,
            title: 'ma super offre',
            type: 'CDI',
            period: 'vitam eternam',
            description: 'ma super description'
        };


        //Création Postulation dans la table postuled
        // const { offre_id, user_id, statut } = {
        //     offre_id: 19,
        //     user_id: 18,
        //     statut: 1
        // };


        connection.getConnection(async function (error, conn) {
            if (error) throw error;

            conn.query(
                `INSERT INTO user (mail,pass,isAdmin,isCandidat,isRecruteur)
                    VALUES ("${mail}","${pass}","${isAdmin}","${isCandidat}","${isRecruteur}")`, (err, data) => {
                if (err) throw err;
                console.log('beforeeach1', data)
                user.id = data.insertId

                conn.query(
                    `INSERT INTO offre (user_id,title,type,period,description) 
                        VALUES ( "${user.id}","${title}","${type}","${period}","${description}")`,
                    (err, data) => {
                        if (err) throw err;
                        console.log('beforeeach2', data)
                        offre.id = data.insertId

                        conn.query(
                            `INSERT INTO postuled (offre_id,user_id,statut)
                                VALUES ("${offre.id}","${user.id}", 1)`, (err, data) => {
                            if (err) throw err;
                            console.log('beforeeach2', data)
                            postuled.id = data.insertId
                        });
                    });
            });
        });
    });

    // // Exemple
    it("SKILL CREATE", (done) => {
        done();
    });

    /****** Get All Users *******/

    // it(" delete certificate", function (done) {
    //     this.timeout(0);
    //     // console.log("app", index.app);
    //     // Test route Get All
    //     chai
    //         .request(index.app)
    //         .delete(`/api/candidat/profil/certificate/${user.id}`)
    //         .set("Accept", "application/json")
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             console.log("res.body", res.body);
    //             res.should.have.status(200);
    //             res.body.User.should.be.a("array");
    //             done();
    //             console.log("PROFIL CANDIDAT DELETE SKILL: You'r Rock Dude !  😎 🆗");
    //         });
    // });

    // /****** Get By ID User *******/

    it(" Get By ID PROFIL CANDIDAT", function (done) {
        // Test route Get Id
        this.timeout(0);
        chai
            .request(index.app)
            .get(`/api/candidat/profil/${user.id}`)
            .set("Accept", "application/json")
            .end((err, res) => {
                if (err) return done(err);
                console.log("res.body", res.body);
                res.should.have.status(200);
                // res.body.userProfil.coord.should.be.a("object");
                res.body.userProfil.experience.should.be.a("array");
                res.body.userProfil.skill.should.be.a("array");
                res.body.userProfil.interest.should.be.a("array");
                res.body.userProfil.certificate.should.be.a("array");
                res.body.userProfil.document.should.be.a("array");

                done();
                console.log("PROFIL CANDIDAT GET ID: You'r Rock Dude !  😎 🆗");
            });
    });

    // /****** Get Update PUT *******/

    // it(" Put Experience", function (done) {
    //     // Test put (ban) user
    //     const body = {
    //         compagny: 'EDF',
    //         job: 'Commercial',
    //         description: 'Un bon vendeur',
    //         user_id: 5
    //     };
    //     const id = 58

    //     chai
    //         .request(index.app)
    //         .put(`/api/candidat/profil/experience/${id}`)
    //         .set("Accept", "application/json")
    //         .send(body)
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             // console.log(res.body);
    //             res.should.have.status(200);
    //             // res.body.experience.should.be.a("array");
    //             // res.body.experience.should.be.a("object");
    //             done();
    //             console.log("PROFIL CANDIDAT UPDATE EXP : You'r Rock Dude !  😎 🆗");
    //         });
    // });

    // it("Test route Put: /api/employer/offer/candidat", (done) => {


    //     //id du candidat
    //     const id = 3

    //     chai
    //         .request(index.app)
    //         .put(`/api/employer/offer/candidat/${id}`)

    //         .send(body)
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             res.should.have.status(200);
    //             // console.log("res body", res.body);
    //             res.body.offers.should.be.a("array");
    //             res.body.message.should.be.a("string");
    //             done();
    //         });
    // });

    /****** Delete  user *******/

    //   it(" Delete user", function (done) {
    //     // Test delete user
    //     chai
    //       .request(index.app)
    //       .delete(`/api/admin/users/${user.id}`)
    //       .set("Accept", "application/json")
    //       .end((err, res) => {
    //         if (err) return done(err);
    //         console.log(res.body);
    //         res.should.have.status(200);
    //         res.body.user.should.be.a("array");
    //         res.body.user[0].should.be.a("object");
    //         done();
    //         console.log("DELETE USER : I'm happy 😆 !!!");
    //       });
    //   });
    // });
});

