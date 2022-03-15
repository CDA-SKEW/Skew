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

describe("UsersController - Chai", function () {
  // this.timeout(0);
  // it("should have the correct initial data values", function () {});
  let user = {};

  // Loop for create Customer before 'it'
  beforeEach(async () => {
    const { mail, pass, isAdmin, isCandidat, isRecruteur } = {
      mail: "test" + Date.now() + "@test.test",
      pass: await bcrypt.hash("test", 10),
      isAdmin: 0,
      isCandidat: 1,
      isRecruteur: 0,
    };
    connection.getConnection(async function (error, conn) {
      if (error) throw error;
      conn.query(
        `INSERT INTO user (mail, pass, isAdmin, isCandidat, isRecruteur)
        VALUES ("${mail}", "${pass}", "${isAdmin}", "${isCandidat}", "${isRecruteur}")`,
        (err, data) => {
          if (err) throw err;
          // console.log("data", data);
          user.id = data.insertId;
          user = { ...user, mail, pass, isAdmin, isCandidat, isRecruteur };

          // console.log("beforeEach TU, create user", user);
        }
      );
    });
  });

  // // Exemple
  // it("Exemple", (done) => {
  //   done();
  // });

  /****** Get All Users *******/

  it(" Get All users", function (done) {
    // console.log("app", index.app);
    // Test route Get All
    chai
      .request(index.app)
      .get("/api/admin/users")
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        res.should.have.status(200);
        res.body.user.should.be.a("array");
        res.body.user[0].should.be.a("object");
        done();
        console.log("USER GET ALL: I'm happy 😆 !!!");
      });
  });

  /****** Get By ID User *******/

  it(" Get By ID users", function (done) {
    // Test route Get Id
    chai
      .request(index.app)
      .get(`/api/admin/users/${user.id}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        res.should.have.status(200);
        res.body.user.should.be.a("array");
        res.body.user[0].should.be.a("object");
        done();
        console.log("USER GET ID: I'm happy 😆 !!!");
      });
  });

  /****** Get Update PUT *******/

  it(" Put (ban) user", function (done) {
    // Test put (ban) user
    chai
      .request(index.app)
      .put(`/api/admin/users/${user.id}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        res.should.have.status(200);
        res.body.user.should.be.a("array");
        res.body.user[0].should.be.a("object");
        done();
        console.log("PUT USER (ban) I'm happy 😆 !!!");
      });
  });

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

/******************
 * messages routes
 ******************/

describe("MessagesController - Chai", function () {
  this.timeout(0);
  let messages = {};

  // Loop for create Customer before 'it'
  beforeEach(async () => {
    const { message, mail, name, firstname, tel, sujet } = {
      name: "YeagerBomB",
      firstname: "Ellen",
      tel: "0607080905",
      message: "salut !",
      mail: "test" + Date.now() + "@test.test",
      sujet: "Des news !!!",
    };
    connection.getConnection(async function (error, conn) {
      if (error) throw error;
      conn.query(
        `INSERT INTO messages (message,  mail, name, firstname, tel, sujet)
            VALUES ("${message}", "${mail}", "${name}", "${firstname}", "${tel}",  "${sujet}")`,
        (err, data) => {
          if (err) throw err;
          console.log("data", messages);
          messages.id = data.insertId;
          messages = {
            ...messages,
            message,
            mail,
            name,
            firstname,
            tel,
            sujet,
          };
          console.log("beforeEach TU, create message", messages);
        }
      );
    });
  });

  // // Exemple
  // it("Exemple", (done) => {
  //   done();
  // });

  /****** Post Message (reply) *******/

  it(" Post Messages (reply)", function (done) {
    const body = {
      firstname: "Souka",
      sujet: "Salut",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      mail: "soukainataa1987@gmail.com",
      reply: "dfgsdfhjgfhjrtf",
    };

    // Test route Get Post
    chai
      .request(index.app)
      .post("/api/admin/messages")
      .set("Accept", "application/json")
      .send(body)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        res.should.have.status(200);
        // res.body.message.should.be.a("array");
        // res.body.message[0].should.be.a("object");
        done();
        console.log("POST MESSAGE OK: I'm happy 😆 !!!");
      });
  });
});
