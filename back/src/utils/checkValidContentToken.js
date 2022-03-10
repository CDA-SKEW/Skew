// import module connection de la base de données
const connection = require("../config/ConnectionDB");
const jwt = require("jsonwebtoken");

module.exports = {
  validContentToken: function (mail, decoded) {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `SELECT * FROM user WHERE mail = "${mail}"`,
          (error, data) => {
            if (error) throw error;
            if (!data[0]) resolve();
            else if (
              data[0].id === decoded.id &&
              data[0].isVerified === decoded.isVerified &&
              data[0].isRecruteur === decoded.isRecruteur &&
              data[0].isCandidat === decoded.isCandidat &&
              data[0].isAdmin === decoded.isAdmin &&
              data[0].isBanned === decoded.isBanned
            ) {

              let token = "visitor";
              token = jwt.sign(
                {
                  id: data[0].id,
                  mail: data[0].mail,
                  isAdmin: data[0].isAdmin,
                  isCandidat: data[0].isCandidat,
                  isRecruteur: data[0].isRecruteur,
                  isVerified: data[0].isVerified,
                  isBanned: data[0].isBanned,
                },
                process.env.SIGN_JWT,
                { expiresIn: "10m" }
              );
              resolve(token);
            }
          }
        );
        conn.release();
      });
    });
  },
};
