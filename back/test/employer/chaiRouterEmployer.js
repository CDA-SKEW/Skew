// Config Chai
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();
const expect = chai.expect;
const path = require("path");

const connection = require("../../src/config/ConnectionDB");
const index = require("../../apiskew");
const jwt = require("jsonwebtoken");
require("dotenv").config();

chai.use(chaiHttp);

// console.log("index ", index )

//Test d'un CRUD avec chaiRouter
describe("Test Router avec ChaiRouter", () => {
  let i = 0;
  let token = "";

  beforeEach(() => {
    // console.log("before each", i);
    token = jwt.sign(
      {
        id: 4,
        mail: "wilfried.zanni@gmail.fr",
        isAdmin: 0,
        isCandidat: 0,
        isRecruteur: 1,
        isVerified: 1,
        isBanned: 0,
      },
      process.env.SIGN_JWT,
      { expiresIn: "2m" }
    );
    i++;
  });

  //Test connection db
  it("db.connection.connect...", function (done) {
    connection.getConnection(function (error, conn) {
      //console.log("result", conn.state)
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
  it("Test route get: /api/employer/dashboard", (done) => {
    chai
      .request(index.app)
      .get("/api/employer/dashboard")
      .set("Accept", "application/json")
      .set({ Authorization: `${token}` })
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        // console.log("res body", res.body);
        res.body.dashboard.should.be.a("object");
        res.body.dashboard.offers.should.be.a("array");
        res.body.dashboard.numberOffers.should.be.a("number");
        res.body.dashboard.numberCandidate.should.be.a("number");
        res.body.dashboard.numberCandidateNull.should.be.a("number");
        res.body.message.should.be.a("string");
        done();
      });
  });

  //Test route post
  it("Test route post: /api/employer/offer", (done) => {
    const body = {
      title: "Developpeur web Chai",
      type: "CDD",
      period: 12,
      description: "Chai description",
      profil: "Chai profil",
      user_id: 4,
    };

    chai
      .request(index.app)
      .post("/api/employer/offer")
      .set({ Authorization: `${token}` })
      .send(body)
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        // console.log("res body", res.body.offers.reverse()[0].offer_id);
        res.body.offers.should.be.a("array");
        done();
      });
  });

  //Test route Delete
  it("Test route delete: /api/employer/offer", (done) => {
    chai
      .request(index.app)
      .get("/api/employer/offer")
      .set({ Authorization: `${token}` })
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        // console.log("res body", res.body.offers.offers[0].offer_id);

        const id = res.body.offers.offers[0].offer_id
        chai
          .request(index.app)
          .delete(`/api/employer/offer/${id}`)
          .set({ Authorization: `${token}` })
          .end((err, res) => {
            if (err) return done(err);
            res.should.have.status(200);
            // console.log("res body", res.body);
            res.body.offers.should.be.a("array");
            res.body.flash.should.be.a("string");
            res.body.message.should.be.a("string");
            done();
          });
      });
  });

  //Test route put
  it("Test route Put: /api/employer/offer/candidat", (done) => {
    const body = {
      offer_id: 2,
      isRetain: true
    };

    //id du candidat
    const id = 3

    chai
      .request(index.app)
      .put(`/api/employer/offer/candidat/${id}`)
      .set({ Authorization: `${token}` })
      .send(body)
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        // console.log("res body", res.body);
        res.body.offers.should.be.a("array");
        res.body.message.should.be.a("string");
        done();
      });
  });


  //Test route put avec image
  it('Test route Put avec img: /api/employer/profil', (done) => {

    const body = {
      address:"5 rue de l'electronique",
      name: "ST electr",
      town: "Le mans",
      zipCode: 72000,
      siret: 40976852000135,
      siren: 356454356,
      category: "PME"
    };

    chai.request(index.app)
      .put("/api/employer/profil")
      .set({ Authorization: `${token}` })
      .field(body)
      .field("Content-Type", "multipart/form-data")
      .attach("avatar", path.resolve(__dirname, "./test.png"))
      .end(function (err, res) {
        if (err) return done(err);
        // console.log("res body", res.body);
        res.body.dataProfilEmployer.should.be.a("object");
        done();
      });
  });

});
