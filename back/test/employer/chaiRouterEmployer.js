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
describe("Test CRUD avec ChaiRouter", () => {
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
      { expiresIn: "1h" }
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
  it("Test route get /api/employer/dashboard", (done) => {
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
        res.body.token.should.be.a("string");
        done();
      });
  });

  //Test route post
  it("Test route post /api/employer/offer", (done) => {
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
        res.body.token.should.be.a("string");
        done();
      });
  });

  // Test route Delete
  it(" ChaiRouter // Delete ID Article", (done) => {
    chai
      .request(index.app)
      .get("/api/employer/offer")
      .set({ Authorization: `${token}` })
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        console.log("res body", res.body.offers[0].offer_id);

        // chai
        // .request(index.app)
        // .delete(`/api/employer/offer/${toto}`)
        // .set({ Authorization: `${token}` })
        // .end((err, res) => {
        //   if (err) return done(err);
        //   res.should.have.status(200);
        //   // console.log("res body", res.body);
        //   done();
        // });


      });


  });
});
