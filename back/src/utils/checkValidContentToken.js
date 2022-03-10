// import module connection de la base de données
const connection = require("../config/ConnectionDB");
const jwt = require("jsonwebtoken");

module.exports = {
  validContentToken: function (mail, decoded) {
    // console.log("je suis dans la fonction checkValidContentToken");
    return new Promise((resolve, reject) => {
      //   console.log("mail", mail);

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
              // console.log("decoded", decoded);
              // console.log("data[0]", data[0]);
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
                { expiresIn: "2m" }
              );

              //   console.log("utils token",token)
              resolve(token);
            }
          }
        );
        conn.release();
      });
    });
  },
};
