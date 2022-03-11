// Config chai
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();
const expect = chai.expect;
const connection = require("../../src/config/ConnectionDB");
const index = require("../../apiskew");
const path = require("path");

chai.use(chaiHttp);

/***** Test Routes chai *****/

// describe("UsersController - Chai", function () {
//   this.timeout(0);
//   it("should have the correct initial data values", function () {});
//   let user = {};

/****** Get All Users *******/

// it(" Get All users", function (done) {
//   // console.log("app", index.app);

//   // Test route Get All
//   chai
//     .request(index.app)
//     .get("/api/admin/users")
//     .set("Accept", "application/json")
//     .end((err, res) => {
//       if (err) return done(err, "😞");
//       console.log(res.body);
//       res.should.have.status(200);
//       res.body.user.should.be.a("array");
//       res.body.user[0].should.be.a("object");
//       done();
//     });
//   it("GET ALL USER OK", function (done) {
//     done();
//     console.log("I'm happy 😆 !!!");
//   });
// });

/****** Get Update PUT *******/

// it(" Put (ban) user", function (done) {
//   // const { id } = user;
//   console.log("id", 44);
//   const body = {
//     mail: "leeJackson@gmail.com",
//   };

//   // Test put (ban) user
//   chai
//     .request(index.app)
//     .put(`/api/admin/users/44`)
//     .set("Accept", "application/json")
//     .send(body)
//     .end((err, res) => {
//       if (err) return done(err, "😞");
//       // console.log(res.body);
//       res.should.have.status(200);
//       res.body.user.should.be.a("array");
//       res.body.user[0].should.be.a("object");
//       done();
//     });
// });
// it("GET PUT USER OK", function (done) {
//   done();
//   console.log("I'm happy 😆 !!!");
// });

/****** Get Update PUT *******/

// it(" Delete user", function (done) {
//   // const { id } = user;
//   console.log("id", 44);
//   const body = {
//     mail: "leeJackson@gmail.com",
//   };

//   // Test delete user
//   chai
//     .request(index.app)
//     .delete(`/api/admin/users/44`)
//     .set("Accept", "application/json")
//     .send(body)
//     .end((err, res) => {
//       if (err) return done(err, "😞");
//       // console.log(res.body);
//       res.should.have.status(200);
//       res.body.user.should.be.a("array");
//       res.body.user[0].should.be.a("object");
//       done();
//     });
// });
// it("GET DELETE USER OK", function (done) {
//   done();
//   console.log("I'm happy 😆 !!!");
// });
// });

/*---------MESSAGES----------*/

// describe("MessagesController - Chai", function () {
//   this.timeout(0);
//   it("should have the correct initial data values", function () {});
//   let message = {};

//   it(" Post message (reply)", function (done, req) {
//     // console.log("app", index.app);
//     const body = {
//       mail: "ellen@yahoo.fr",
//       firstname: "YeagerBomB",
//       sujet: "coucou !",
//       reply: "Pour ne pas prendre de tes nouvelles",
//     };

//     // Test route Get All
//     chai
//       .request(index.app)
//       .post("/api/admin/messages")
//       .set("Accept", "application/json")
//       .send(body)
//       .end((err, res) => {
//         if (err) return done(err, "😞");
//         console.log(res.body);
//         res.should.have.status(200);
//         res.body.messages.should.be.a("array");
//         res.body.messages[0].should.be.a("object");
//         done();
//         console.log("I'm happy 😆 !!!");
//       });
//   });
// });
