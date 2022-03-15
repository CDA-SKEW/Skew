// Config Chai
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();
const expect = chai.expect;
const connection = require("../../src/config/ConnectionDB");
const index = require("../../apiskew");

require("dotenv").config();

chai.use(chaiHttp);

/***** Test Routes chai *****/

//Test d'un CRUD avec chaiRouter
describe("Test Router avec ChaiRouter", () => {
    let i = 0;
    let token = "";

    //Test connection db
    it("db.connection.connect...", function (done) {
        connection.getConnection(function (error, conn) {
            try {
                expect(conn.state).to.equal("connected");
                done();
            } catch (error) {
                done(error);
            }
            conn.release();
        });
    });

    //Test route get
    it("Test route get: /api/visiteur-data", (done) => {
        chai
            .request(index.app)
            .get("/api/visiteur-data")
            .set("Accept", "application/json")
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.dbVisiteurDataEntrepriseAvatar.should.be.a("array");
                res.body.dbVisiteurDataEntrepriseAvatar[0].avatar.should.be.a("string");
                res.body.dbVisiteurDataEntrepriseAvatar[0].isRecruteur.should.be.a("number");
                done();
            });
    });

    //Test route post
    it("Test route post: /api/contact", (done) => {
        const body = {
            nom: "Sponge",
            prenom: "Bob",
            tel: 601020304,
            mail: "bob@sponge.fr",
            message: "Chai test",
            sujet: "Chai",
        };

        chai
            .request(index.app)
            .post("/api/contact")
            .send(body)
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.dbMessages.should.be.a("array");
                res.body.dbMessages[0].name.should.be.a("string");
                res.body.dbMessages[0].firstname.should.be.a("string");
                res.body.dbMessages[0].tel.should.be.a("number");
                res.body.dbMessages[0].mail.should.be.a("string");
                res.body.dbMessages[0].message.should.be.a("string");
                res.body.dbMessages[0].sujet.should.be.a("string");
                done();
            });
    });

    //Test route Delete
    it("Test route delete: /api/admin/messages/:id", (done) => {
        chai
            .request(index.app)
            .get("/api/admin/messages/")
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);

                //id du message
                const id = res.body.messages[0].id

                chai
                    .request(index.app)
                    .delete(`/api/admin/messages/${id}`)
                    .end((err, res) => {
                        if (err) return done(err);
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        res.body.status.should.be.a("string");
                        res.body.message.should.be.a("string");
                        res.body.messages.should.be.a("array");
                        done();
                    });
            });
    });

    // Test route Update
    it("Test route update: /api/admin/users/:id", (done) => {
        chai
            .request(index.app)
            .get("/api/admin/users")
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                console.log('res.body', res.body.user[0])
                //id de l'user
                const id = res.body.user[0].id

                const body = {
                    isVerified: 1,
                }
                chai
                    .request(index.app)
                    .put(`/api/admin/users/${id}`)
                    .end((err, res) => {
                        if (err) return done(err);
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        done();
                    });
            })
    })
})