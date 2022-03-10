// const assert = require("assert");
// const connection = require("../../src/config/ConnectionDB");

// /*** CRUD User ***/

// describe("UsersController || users", function () {
//   this.timeout(0);
//   const getListUsers = {};

//   beforeEach(async (result) => {
//     connection.getConnection(function (err, conn) {
//       /* Requête SQL pour afficher tous les Users 
//         de la table user de la DB Skew */
//       conn.query(
//         `SELECT u.*, c.name, c.lastname, c.badge, c.avatar FROM user as u
//           INNER JOIN  contactProfil  as c
//           ON u.id = c.user_id;
//     `,
//         (error, data) => {
//           if (error) throw error;
//           result(null, data);
//         }
//       );
//       conn.release();
//     });
//   });

//   /******  GET  *******/

//   // Get All
//   //   it("GET ALL // users", function () {
//   //     conn.query(`SELECT * FROM user`);

//   //     conn.release();
//   //   });
// });
