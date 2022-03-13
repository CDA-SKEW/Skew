// Config Chai
const { Offer } = require("../../src/models/employer/OfferModel")
const chai = require("chai");
const chaiHttp = require("chai-http");
var assert = require("assert");

require("dotenv").config();

chai.use(chaiHttp);

describe("Test CRUD avec MOCHA", () => {

  //Loop for create Customer before 'it'
  beforeEach((done) => {
    let offerObj = {
      title: "post Mocha beforEach",
      type: "CDD",
      period: 12,
      description: "description test post Mocha beforEach",
      profil: "description test post Mocha beforEach",
      user_id: 4
    }

    Offer.createOffer(offerObj, async (err, data) => {
      if (err) console.log("err", err)
      customer.id = data[0].offer_id;
      assert.strictEqual('number', typeof customer.id)
    });
    done()
  });

  //Create Offer
  it("POST OFFER", (done) => {
    let offerObj = {
      title: "post Mocha",
      type: "CDD",
      period: 12,
      description: "description test post Mocha",
      profil: "description test post Mocha",
      user_id: 4
    }

    Offer.createOffer(offerObj, async (err, data) => {
      if (err) console.log("err", err)
      // console.log(typeof data, data)
      assert.strictEqual('object', typeof data)
      // assert.strictEqual(userID[0].name, "BRUNO");
      // assert.strictEqual(userID[0].email, "Bru@nu.fr");
      // assert.strictEqual(userID[0].mobile, "0606060606");
      done();

    });
  });

  // Get ALL offer by user
  it("GET ALL // Customer", (done) => {
    Offer.getOffer((err, data) => {
      if (err) console.log("err", err)
      // console.log(typeof data, data)
      assert.strictEqual('object', typeof data)
      // assert.strictEqual(userID[0].name, "BRUNO");
      // assert.strictEqual(userID[0].email, "Bru@nu.fr");
      // assert.strictEqual(userID[0].mobile, "0606060606");
      done();
    });
  });

  // Get ID offer
  // it("GET ID // Customer", (done) => {
  //   // console.log("GETID: ", customer.id);
  //   let values = ["BRUNO", "Bru@nu.fr", "0606060606"];
  //   // Récupère l'id du post au dessus
  //   let sql = `SELECT * FROM customers WHERE id = ${customer.id}`;

  //   db.query(sql, function (err, data) {
  //     if (err) throw err;
  //     // console.log("GET ID: ", data);
  //     assert.strictEqual('object', typeof data)
  //     done();
  //   });
  // });

  // Edit Customers
  // it("PUT ID // Customer", (done) => {
  //   // console.log("EDITT: ", customer);
  //   let sql = `UPDATE customers
  //                SET name   = 'Test Edit',
  //                    mobile = 'Test Edit',
  //                    email  = '0909090909'
  //                WHERE  id  = '${ id }';`;

  //   db.query(sql, function (err, data) {
  //     if (err) throw err;
  //     // console.log('PUT: ', data)
  //     assert.strictEqual('object', typeof data)
  //     done();
  //   });
  // });

  // Delete ID
  // it("DELETE ID // Customer", (done) => {
  //   let sql = `DELETE FROM customers WHERE id = ${ id }`;
  //   db.query(sql, function (err, data) {
  //     if (err) throw err;
  //     // console.log('DELETE ID: ', data)
  //     assert.strictEqual('object', typeof data)
  //     done();
  //   });
  // });
  // // à décommenter pour tout supprimer
  // // Delete ALL
  // it("DELETE ALL // Customer", (done) => {
  //   let sql = `DELETE FROM customers`;
  //   db.query(sql, function (err, data, fields) {
  //     if (err) throw err;
  //     // console.log('DELETE ID: ', data)
  //     assert.strictEqual('object', typeof data)
  //     done();
  //   });
  // });
});



// const assert = require('assert');
// const Message = require('../api/database/models/Message');


// // Generation id pout test Mocka
// let lengthNb = 24
// let x = 0
// let generateId = ""

// while (x < lengthNb) {
//   generateId = generateId + Math.trunc(Math.random() * 9)
//   x++
// }
// //console.log(generateId);
// // End Generation id pout test Mocka

// // On donne un nom à notre test
// describe('Mocha // CRUD Message', () => {
//   let message

//   // Creer un message avant chaque done()
//   beforeEach((done) => {
//     const message = new Message({
//       nameMessage: "beforeEach",
//     });
//     message.save()
//       .then(() => done());
//   });

//   it('CRUD  Mocha // CREATE message', (done) => {
//     const message = new Message({
//       nameMessage: "Test Create",
//       lastNameMessage: "Mocha",
//       contentMessage: "Create Message Mocha",
//       emailMessage: "Create@message.com",
//       subjectMessage: "Create",
//       telMessage: "02 02 02 02 02",
//     });

//     //console.log(message)
//     message.save()
//       .then((message) => {
//         //console.log(mess)
//         assert(!message.isNew);
//         done();
//         //done(console.log("Test create Message: " + mess));
//       });
//   });

//   it('CRUD  Mocha // read message by nameMessage', (done) => {
//     Message.findOne({
//         nameMessage: "Test Create"
//       })
//       .then((message) => {
//         assert(message.nameMessage = "Test Create");
//         //done(console.log("Test Read Message by "nameMessage  = Test Create" : " + message));
//         done();
//       })
//       .catch((err) => console.log(err));
//   })


//   it('CRUD  Mocha // read All message', (done) => {
//     Message.find({})
//       .then((db) => {
//         assert(db);
//         //done(console.log("Test Read All Message by in Db : " + db));
//         done();
//       })
//       .catch((err) => console.log(err));
//   })


//   it('CRUD  Mocha // CREATE message for Read by Id', (done) => {
//     //console.log(generateId);
//     const message = new Message({
//       _id: generateId,
//       nameMessage: "Create for Read by Id",
//       lastNameMessage: "Mocha",
//       contentMessage: "Create for Read by Id Message Mocha",
//       emailMessage: "CreateForReadById@message.com",
//       subjectMessage: "Create for Read by Id",
//       telMessage: "02 02 02 02 02"
//     })

//     //console.log(message)
//     message.save()
//       .then((message) => {
//         //console.log(mess)
//         assert(!message.isNew);
//         done();
//         //done(console.log("Test create Message: " + mess));
//       });
//   });


//   it('CRUD  Mocha // read message by _id ', (done) => {
//     //console.log(generateId);
//     Message.findById({
//         _id: generateId
//       })
//       .then((message) => {
//         assert(message._id = generateId);
//         //done(console.log("read message by _id: " + message));
//         done();
//       });
//   })


//   it('CRUD  Mocha // update message by _id', (done) => {
//     Message.findOneAndUpdate({
//         generateId,
//         nameMessage: "Update by Id",
//         lastNameMessage: "Mocha",
//         contentMessage: "Update by Id Message Mocha",
//         emailMessage: "UpdateById@message.com",
//         subjectMessage: "Update by Id",
//         telMessage: "02 02 02 02 02",
//       })
//       .then((db) => {
//         assert(db.nameMessage = "Update by Id");
//         // done(console.log("update message by _id: " + db))
//         done();
//       })
//       .catch((err) => console.log(err));
//   })


//   it('CRUD  Mocha // Delete message by _id', (done) => {
//     Message.deleteOne()
//       .then(() => Message.findOneAndRemove({
//         _id: generateId
//       }))
//       .then((mess) => {
//         assert(mess = []);
//         //done(console.log("Delete message by _id: " + mess));
//         done();
//       })
//       .catch((err) => console.log(err));
//   });


//   // Efface toutes les data créés par les beforeEach(done)
//     // A commenter pour voir l'enregistrelent dan la db
//   it('CRUD  Mocha // Delete All "beforeEach(done)" ', (done) => {
//     Message.deleteMany({
//         nameMessage: "beforeEach"
//       })
//       .then()
//       .then((mess) => {
//         assert(mess = []);
//         //done(console.log("Delete All message beforeEach(done): " +mess));
//         done();
//       })
//       .catch((err) => {
//         console.error("Handling promise rejection", err);
//       });
//   });


// });

