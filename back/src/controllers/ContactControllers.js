// Import Model
const Contact = require("../models/ContactModel");

require("dotenv").config();

class ContactControllers {
    async post(req, res) {
        let newContact = new Contact ({
            name: String(req.body.name),
            firstname: String(req.body.firstname),
            tel: String(req.body.tel),
            mail: String(req.body.mail),
            message: String(req.body.message),
            sujet: String(req.body.sujet),
        })
        try {
            Contact.post(newContact, (err, data) => {
                if (err) res.send(err);
                return res.send ({
                    method: req.method,
                    status: 'success',
                    flash: 'Create Message Success !',
                    dbMessages: data,
                })
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactControllers;