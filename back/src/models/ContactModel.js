/*
 * Model de 'Messages'
 ******************************/
const connection = require("../config/ConnectionDB");

// Model
const Contact = function (message) {
    this.id = message.id,
        this.name = message.name,
        this.firstname = message.firstname,
        this.tel = message.tel,
        this.mail = message.mail,
        this.message = message.message,
        this.sujet = message.sujet,
        this.date = message.date
};

// Post message

Contact.post = function (newContact, result) {
    const { name, firstname, tel, mail, message, sujet } = newContact
    connection.getConnection(async function (error, conn) {
        conn.query(
            `INSERT INTO messages SET name=:name, firstname=:firstname, tel=:tel, mail=:mail, message=:message, sujet=:sujet`,
            { name, firstname, tel, mail, message, sujet }, (error, data) => {
                if (error) throw error;
                conn.query(`SELECT * FROM messages`, (error, data) => {
                    if (error) throw error;
                    result(null, data);
                    conn.release();
                })
            })
    });
};

module.exports = Contact;