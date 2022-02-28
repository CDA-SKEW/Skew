/*
 * Model de 'Message'
 ******************************/

// Connection à la base de données
const connection = require("../../config/ConnectionDB");

// Model
const Message = function (message) {
  (this.id = message.id),
    (this.name = message.name),
    (this.mail = message.mail),
    (this.firstname = message.firstname),
    (this.mail = message.message),
    (this.sujet = message.sujet),
    (this.date_create = message.date_create);
};

// Get All Messages
Message.getListMessages = function (result) {
  console.log("Method getMessageAll Model Message");
  // Se connecter à la base de données
  connection.getConnection(function (err, conn) {
    /* Requête SQL pour afficher tous les Messages 
    de la table messages de la DB Skew */
    conn.query(`SELECT * FROM messages`, (error, data) => {
      //   Si erreur l'afficher
      if (error) throw error;
      //   Sinon afficher les datas
      else result(null, data);
    });
    // Stop la function une fois exécutée
    conn.release();
  });
};

// Get One Message
Message.getMessageId = function (message, result) {
  //   console.log("Method getID Model Message", message);
  const { id } = message;
  connection.getConnection(function (error, conn) {
    conn.query(
      ` SELECT * FROM messages WHERE id = :id`,
      { id },
      (error, data) => {
        if (error) throw error;
        else result(null, data);
        //   console.log("data", data);
      }
    );
    conn.release();
  });
};

// Post Message
Message.replyMessage = function (result) {
  const { message } = newMessage;
  connection.getConnection(function (error, conn) {
    console.log(req.body.message, "MODEL");
    conn.query(
      `
          INSERT INTO messages ( message)
          VALUES 
          newMessage = :message
      `,
      { message },
      (error, data) => {
        if (error) throw error;
        conn.query(`SELECT * FROM messages`, (error, data) => {
          if (error) throw error;
          result(null, data);
        });
      }
    );
    conn.release();
  });
};

// Delete Message
// Message.deleteMessage = function (message, result) {
//   //   console.log("Method delete Model Message", message);
//   const { id } = message;
//   connection.getConnection(function (error, conn) {
//     conn.query(
//       ` DELETE FROM messages
//     WHERE id  = :id`,
//       { id },
//       (error, data) => {
//         if (error) throw error;
//         else result(null, data);
//         console.log("data", data);
//       }
//     );
//     conn.release();
//   });
// };

// Ce qui nous permettra de pouvoir l'utiliser sur d'autre page
module.exports = Message;
