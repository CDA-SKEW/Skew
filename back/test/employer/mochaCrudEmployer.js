// Config Chai
const { Offer } = require("../../src/models/employer/OfferModel");
const {
  ProfilUserCompagny,
} = require("../../src/models/employer/ProfilUserModel");
const chai = require("chai");
const chaiHttp = require("chai-http");
const connection = require("../../src/config/ConnectionDB");
var assert = require("assert");

require("dotenv").config();

chai.use(chaiHttp);

describe("---Test CRUD avec Mocha---", () => {
  describe("Test Create Read Delete Offer avec MOCHA", () => {
    let offer = {};
    let boucle = 1;
    //Loop for create Create Offer 'it'
    beforeEach((done) => {
      const { title, type, period, description, profil, user_id } = {
        title: "post Mocha beforEach",
        type: "CDD",
        period: 12,
        description: "description test post Mocha beforEach",
        profil: "description test post Mocha beforEach",
        user_id: 4,
      };

      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO offre (title,type,period,description, profil,user_id) values("${title}","${type}",${period},"${description}", "${profil}",${user_id})`,
          function (err, data) {
            // console.log("Employee Id:- " + data.insertId);
            offer.id = data.insertId;
            offer = {
              ...offer,
              title,
              type,
              period,
              description,
              profil,
              user_id,
            };
          }
        );
        done();
      });
    });
    //Create Offer
    it("POST OFFER", (done) => {
      let offerObj = {
        title: "post Mocha",
        type: "CDD",
        period: 12,
        description: "description test post Mocha",
        profil: "description test post Mocha",
        user_id: 4,
      };

      Offer.createOffer(offerObj, async (err, data) => {
        if (err) console.log("err", err);
        // console.log(typeof data, data)
        assert.strictEqual("object", typeof data);
        boucle = boucle + 1;
        done();
      });
    });
    //Get ALL offer
    it("GET ALL OFFER", (done) => {
      Offer.getOffer((err, data) => {
        if (err) console.log("err", err);
        // console.log(typeof data, data)
        assert.strictEqual("object", typeof data);
        boucle = boucle + 1;
        done();
      });
    });
    it("DELETE OFFER ID", (done) => {
      //console.log("GETID: ", offer.id);
      Offer.deleteOffer(offer.id, (err, data) => {
        if (err) console.log("err", err);
        // console.log(typeof data, data)
        assert.strictEqual("object", typeof data);
        boucle = boucle + 1;
        done();
      });
    });
    // Delete ALL Offer
    it("DELETE ALL OFFER Create during TU", (done) => {
      // console.log("GETID Delete all: ", offer.id, boucle);
      let id = offer.id - boucle;
      //console.log("GETID Delete all id: ", id);
      connection.getConnection(function (error, conn) {
        conn.query(
          `delete from offre where offer_id >${id}`,
          function (err, data) {
            // console.log(typeof data, data)
            assert.strictEqual("object", typeof data);
            done();
          }
        );
      });
    });
  });

  describe("Test Update  Read Delete Profil employer avec MOCHA", () => {
    let user = {};
    let boucle = 1;
    //Loop for create Create Offer 'it'
    beforeEach((done) => {
      const { mail } = {
        mail: "TU" + Date.now() + "@gmail.com",
      };

      const { name } = {
        name: "TU",
      };

      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO user (mail) values("${mail}")`,
          function (err, data) {
            //console.log("user Id:- " + data.insertId);
            user.id = data.insertId;

            conn.query(
              `INSERT INTO contactProfil (user_id, name) values(${user.id},"${name}")`,
              function (err, data) {
                //console.log("employerProfil Id:- " + user.id);
              }
            );
            done();
          }
        );
      });
    });
    it("PUT PROFIL EMPLOYER", (done) => {
      let profilUserCompagnyObj = {
        user_id: user.id,
        address: "adresse TU",
        name: "name TU",
        town: "ville TU",
        zipCode: 77777,
        siret: 7000077700007,
        siren: 777000777,
        category: "TU PME",
      };

      let file = false;

      ProfilUserCompagny.updateProfilCompagny(
        profilUserCompagnyObj,
        file,
        async (err, data) => {
          if (err) console.log("err", err);
          //console.log("update profil",typeof data, data)
          boucle = boucle + 1;
          assert.strictEqual("object", typeof data);
          done();
        }
      );
    });
    // Delete ALL Offer
    it("GET PROFIL EMPLOYER after update", (done) => {
      ProfilUserCompagny.getProfilCompagnyById(
        user.id - 1,
        async (err, data) => {
          if (err) console.log("err", err);
          //console.log("Get profil",typeof data, data)
          boucle = boucle + 1;
          assert.strictEqual("object", typeof data);
          done();
        }
      );
    });
    // Delete ALL Offer
    it("DELETE USER Create during TU", (done) => {
      //console.log("GETID Delete all: ", user.id);
      let id = user.id - boucle;
      //console.log("GETID Delete all id: ", id);
      connection.getConnection(function (error, conn) {
        conn.query(
          `delete from contactProfil where user_id >${id}`,
          function (err, data) {}
        );
        conn.query(`delete from user where id >${id}`, function (err, data) {
          done();
        });
      });
    });
  });
});
