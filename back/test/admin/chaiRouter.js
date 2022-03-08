const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();
const expect = chai.expect;
const { app } = require("../../src/Server");
const { query } = require("../../src/config/ConnectionDB");
const path = require("path");

chai.use(chaiHttp);

/*****Test Routes chai *****/

describe("UsersController - Chai", () => {
  let getListUsers = {};

  /*****Before Each *****/

  beforeEach(async (conn) => {
    const rand = Math.floor(Math.random() * 100 + 54);
    const date = new Date();
    const format = date.getMilliseconds() + rand;

    conn.query(`
        SELECT u.*, c.name, c.lastname, c.badge, c.avatar FROM user as u
        INNER JOIN  contactProfil  as c
        ON u.id = c.user_id
            `);
    console.log("Before each: ", getListUsers);
  });

  it("Get All Users", (done) => {
    this.timeout(500);
    setTimeout(done, 300);
    // Test route Get All Users
    chai;
    Promise.all([
      request(app)
        .get("/admin/users")
        .set("Accept", "application/json")
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          //   res.body.user.should.be.a("array");
          //   res.body.user[0].should.be.a("object");
          done();
        }),
    ]);
  });
});
