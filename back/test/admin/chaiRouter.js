const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();
const expect = chai.expect;
const connection = require("../../src/config/ConnectionDB");
const { app } = require("../../src/Server");
const path = require("path");

chai.use(chaiHttp);

/***** Test Routes chai *****/

describe("UsersController - Chai", function () {
  this.timeout(0);
  it("should have the correct initial data values", function () {});
  let user = {};

  /******* Before Each *******/

  beforeEach(function () {
    connection.getConnection(function (result, conn, error, data) {
      conn.query(
        `select * from user;
  `
        // (error, data),
        // function () {
        //   if (error) throw error;
        //   result(null, data);
        // }
      );
      conn.release();
    });
  });

  /****** Get All Users *******/

  it("Get all users", (done, error) => {
    // console.log("app", app, done());

    // Test route Get All
    chai
      .request(app)
      .get("/admin/users")
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err, " 😞 ");
        res.should.have.status(200);
      })
      // .then((req) => {
      //   expect(1).to.equal(11); // this will throw a error
      //   done(); // this will resove the test if there is no error
      // })
      // .catch((error) => {
      //   done(error); //this will catch the thrown error
      // })
      .then(() => done(), done);
  });

  /****** Get put user *******/

  //  it("Get put user", (done, error) => {
  //   console.log("app", done());

  //   // Test route Get All
  //   chai
  //     .request(app)
  //     .get(`/admin/users/${id}`)
  //     .set("Accept", "application/json")
  //     .end((err, res) => {
  //       if (err) return done(err, " 😞 ");
  //       res.should.have.status(200);
  //       // res.body.user.should.be.a("array");
  //       // res.body.user[0].should.be.a("object");
  //     })
  //     .then((req) => {
  //       expect(1).to.equal(11); // this will throw a error
  //       done(); // this will resove the test if there is no error
  //     })
  //     .catch((error) => {
  //       done(error); //this will catch the thrown error
  //     });
  // });

  it("TEST UNITAIRES OK", (done) => {
    done();
    console.log("I'm happy 😆 !!!");
  });
});
