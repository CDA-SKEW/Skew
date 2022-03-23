// Config Chai
const Contact = require("../../src/models/ContactModel");
const MessageAdmin = require("../../src/models/admin/MessageModel");
const chai = require("chai");
const chaiHttp = require("chai-http");
const connection = require("../../src/config/ConnectionDB");
var assert = require("assert");

require("dotenv").config();

chai.use(chaiHttp);

describe("Test Create Read Delete Message avec MOCHA", () => {
    let messages = {};
    let boucle = 1;

    //Loop for create Create Message 'it'
    beforeEach((done) => {
        const { name, firstname, tel, mail, message, sujet } = {
            name: "Sponge",
            firstname: "Bob",
            tel: 1234567890,
            mail: "bob@sponge.fr",
            message: "Mocha description",
            sujet: "Mocha",
        };

        connection.getConnection(function (error, conn) {
            conn.query(
                `INSERT INTO messages SET name=:name, firstname=:firstname, tel=:tel, mail=:mail, message=:message, sujet=:sujet`,
                { name, firstname, tel, mail, message, sujet },
                function (err, data) {
                    messages.id = data.insertId;
                }
            );
            done();
        });
    });

    //test
    it('GET TEST', (done) => {
        done();
    })

    //Create Message
    it("POST MESSAGE", (done) => {
        let newContact = {
            name: "Vador",
            firstname: "Dark",
            tel: 1212121212,
            mail: "dark@vador.com",
            message: "description Mocha",
            sujet: "Mocha2",
        };

        Contact.post(newContact, (err, data) => {
            if (err) console.log("err", err);
            assert.strictEqual("object", typeof data);
            boucle = boucle + 1;
            done();
        });
    });

    //Read Messages
    it("GET MESSAGE", (done) => {
        MessageAdmin.getListMessages((err, data) => {
            if (err) console.log("err", err);
            assert.strictEqual("object", typeof data);
            boucle = boucle + 1;
            done();
        });
    });

    //Delete Message
    it("DELETE MESSAGE", (done) => {
        let id = messages.id - boucle;
        connection.getConnection(function (error, conn) {
            conn.query(
                `delete from messages where id >${id}`,
                function (err, data) {
                    assert.strictEqual("object", typeof data);
                    done();
                }
            );
        });
    });
});