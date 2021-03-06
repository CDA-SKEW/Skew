const connection = require("../../src/config/ConnectionDB");
var assert = require("assert");
// const bcrypt = require("bcrypt");

/******************
 * users controller
 ******************/

describe("USERS CONTROLLER", function () {
    this.timeout(0);
  let user = {};
  let id = 334;

// beforeEach((done) => {
//   const { mail, pass, isAdmin, isCandidat, isRecruteur, isBanned } = {
//     mail: "test" + Date.now() + "@test.test",
//     pass: "",
//     isAdmin: 0,
//     isCandidat: 1,
//     isRecruteur: 0,
//     isBanned: 1,
//   };
//   connection.getConnection(async function (error, conn) {
//     if (error) throw error;
//     conn.query(
//       `INSERT INTO user (mail, pass, isAdmin, isCandidat, isRecruteur, isBanned)
//           VALUES ("${mail}", "${pass}", "${isAdmin}", "${isCandidat}", "${isRecruteur}", "${isBanned}")`,
//       (err, data) => {
//         if (err) throw err;
//         console.log("data", data);
//         user.id = data.insertId;
//         user = {
//           ...user,
//           mail,
//           pass,
//           isAdmin,
//           isCandidat,
//           isRecruteur,
//           isBanned,
//         };
//         console.log("beforeEach TU MOCHA, create user", user);
//       },
//       // assert(data),
//       done()
//     );
//   });
 });

//   Test
// it("TEST CONTROLLER // user", (done) => {
//   // console.log("TEST: ", id)
//   done();
// });

// Get ALL Users
it("GET ALL || USERS", (done) => {
  let sql = `SELECT * FROM user`;
  connection.getConnection(async function (error, conn) {
    if (error) throw error;
    conn.query(sql, (err, data) => {
      if (err) console.log(err);
      console.log("get ALL Users Test OK 🥳", data);
      assert(data);
      done();
    });
  });
});

// Get ID User
// it("GET ID || USER", (done) => {
//   console.log("GETID: ", id);
//   let sql = `SELECT * FROM user WHERE id = ${id}`;
//   connection.getConnection(async function (error, conn) {
//     if (error) throw error;
//     conn.query(sql, (err, data) => {
//       if (err) console.log(err);
//       console.log("get ID User Test OK 🥳", data);
//       assert(data);
//       done();
//     });
//   });
// });

// Get put (ban) User
// it("PUT ID || USER", (done) => {
//   console.log("put:", id);
//   let sql = `UPDATE user
//       set
//       isBanned = 0
//       WHERE id = ${id};`;
//   connection.getConnection(async function (error, conn) {
//     if (error) throw error;
//     conn.query(sql, (err, data) => {
//       if (err) console.log(err);
//       console.log("get PUT User Test OK 🥳", data);
//       assert(data);
//       done();
//     });
//   });
// });

// it("DELETE ID || user", (done) => {
//   console.log("delete:", id);
//   let sql = `DELETE FROM user
//     WHERE id = ${id}`;
//   connection.getConnection(async function (error, conn) {
//     if (error) throw error;
//     conn.query(sql, (err, data) => {
//       if (err) console.log(err);
//       console.log("DELETE user Test OK 🥳", data);
//       assert(data);
//       done();
//     });
//   });
// });
// });

/**********************
 * MESSAGES CONTROLLER
 **********************/

// describe("MessagesController - Chai", function () {
//   this.timeout(0);
//   let messages = {};
//   let id = 370;

  // Loop for create Customer before 'it'
  // beforeEach(async () => {
  //   const { message, mail, name, firstname, tel, sujet } = {
  //     name: "YeagerBomB",
  //     firstname: "Ellen",
  //     tel: "0607080905",
  //     message: "salut !",
  //     mail: "test" + Date.now() + "@test.test",
  //     sujet: "Des news !!!",
  //   };
  //   connection.getConnection(async function (error, conn) {
  //     if (error) throw error;
  //     conn.query(
  //       `INSERT INTO messages (message,  mail, name, firstname, tel, sujet)
  //         VALUES ("${message}", "${mail}", "${name}", "${firstname}", "${tel}",  "${sujet}")`,
  //       (err, data) => {
  //         if (err) throw err;
  //         console.log("data", messages);
  //         messages.id = data.insertId;
  //         messages = {
  //           ...messages,
  //           message,
  //           mail,
  //           name,
  //           firstname,
  //           tel,
  //           sujet,
  //         };
  //         console.log("beforeEach TU, create message", messages);
  //       }
  //     );
  //   });
  // });

  // // Exemple
  // it("Exemple", (done) => {
  //   done();
  // });

  // Get message ID
  // it("GET ID || MESSAGE", (done) => {
  //   console.log("message :", id);
  //   let sql = `SELECT * FROM messages WHERE id = ${id}`;
  //   connection.getConnection(async function (error, conn) {
  //     if (error) throw error;
  //     conn.query(sql, (err, data) => {
  //       if (err) console.log(err);
  //       console.log("GET ID message Test OK 🥳", data);
  //       assert(data);
  //       done();
  //     });
  //   });
  // });

  // Post (reply) message
//   it("POST || MESSAGE", (done) => {
//     let values = {
//       firstname: "Souka",
//       sujet: "Salut",
//       message:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       mail: "soukainataa1987@gmail.com",
//       reply: "dfgsdfhjgfhjrtf",
//     };
//     console.log(values);
//     let sql = `INSERT INTO messages (message) values (message) `;
//     connection.getConnection(async function (err, conn) {
//       if (err) throw error;
//       conn.query(sql, values, (err, data) => {
//         if (err) console.log(err);
//         // console.log("POST: ", data);
//         console.log("POST (reply) message Test OK 🥳", data);
//         assert(data);
//         done();
//       });
//     });
//   });
// });
