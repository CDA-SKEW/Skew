// Config Chai
const { Contact } = require("../../src/models/ContactModel");
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
        const { nom, prenom, tel, mail, message, sujet } = {
            nom: "Sponge",
            prenom: "Bob",
            tel: 1234567890,
            mail: "bob@sponge.fr",
            message: "Mocha description",
            sujet: "Mocha",
        };

        connection.getConnection(function (error, conn) {
            conn.query(
                `INSERT INTO messages SET name=:nom, firstname=:prenom, tel=:tel, mail=:mail, message=:message, sujet=:sujet`,
                { nom, prenom, tel, mail, message, sujet },
                function (err, data) {
                    // message.id = data.insertId;
                    messages = {
                        ...message,
                        nom,
                        prenom,
                        tel,
                        mail,
                        message,
                        sujet,
                    };
                }
            );
            done();
        });
    });

    //Create Message
    it("POST MESSAGE", (done) => {
        let messageObj = {
            name: "Vador",
            firstname: "Dark",
            tel: 1212121212,
            mail: "dark@vador.com",
            message: "description Mocha",
            sujet: "Mocha2",
        };

        Contact.post(messageObj, result => {
            if (err) console.log("err", err);
            console.log('data', result)
            assert.strictEqual("object", typeof result);
            boucle = boucle + 1;
            done();
        });
    });
});