// Database
const ConnectionDB = require("../../src/config/ConnectionDB");
const db = require("../../src/config/db");
// Model User
const User = require("../../src/models/admin/UsersModel");

// Config Chai
const chai = require("chai"),
  chaiHttp = require("chai-http"),
  should = require("chai").should(),
  expect = chai.expect,
  server = require("../../src/Server"),
  path = require("path");

chai.use(chaiHttp);

// Controllers List
describe("CHAI // CONTROLLER //  UsersController", () => {
  beforeEach((done) => {
    User.getListUsers({}, (err) => {
      done();
      this.timeout(15000);
    });
  });

  it(" ChaiRouter // getListUsers", (done) => {
    chai
      .request(server)
      .get("/api/admin")
      .set("Accept", "application/json")
      .expect(200);
    this.timeout(15000);
    setTimeout(done, 15000).end((err, res) => {
      console.log(res);
      if (err) return done(err);
      res.should.have.status(200);
      res.should.be.a("object");
      done();
    });
  });

  // it(" ChaiRouter // getUserId", (done) => {
  //   let user = new User({
  //       title: "test Chai ID user",
  //     }),
  //     userID = {
  //       title: "test Chai ID user 2",
  //     };
  //   chai
  //     .request(server)
  //     .post("/api/admin/" + user.id)
  //     .send(userID)
  //     .end((err, res) => {
  //       res.should.be.a("object");
  //       done();
  //     });
  // });

 
});
