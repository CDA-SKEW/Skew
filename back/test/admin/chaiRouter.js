// // DB
// const connection = require("../../src/config/ConnectionDB");
// const dbOptions = require("../../src/config/db");
// const User = require("../../src/models/UserModel");

// // Config Chai
// const chai = require("chai"),
//   chaiHttp = require("chai-http"),
//   should = require("chai").should(),
//   expect = chai.expect,
//   Server = require("../../src/Server"),
//   path = require("path");

// chai.use(chaiHttp);

// describe("CHAI || CONTROLLER ||  UsersController", () => {
//   beforeEach((done) => {
//     User.getListUsers({}, (err) => {
//       done();
//     });
//   });

//   it(" ChaiRouter || Get All Users", (done) => {
//     chai
//       .request(Server)
//       .get("/api/admin/users")
//       .set("Accept", "application/json")
//       .expect(200)
//       .end((err, res) => {
//         console.log(res);
//         if (err) return done(err);
//         res.should.have.status(200);
//         res.should.be.a('object');
//         done();
//       });
//   });
// });
