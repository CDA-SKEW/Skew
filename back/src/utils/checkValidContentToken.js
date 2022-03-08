// import module connection de la base de données
const connection = require("../config/ConnectionDB")
const jwt = require("jsonwebtoken")

module.exports = {
  validContentToken: function (mail) {
    // console.log("je suis dans la fonction checkValidContentToken");
    return new Promise((resolve, reject) => {
    //   console.log("mail", mail);

      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM user WHERE mail = "${mail}"`, (error, data) => {
          if (error) throw error;
          if (!data[0]) resolve();
          else if (data[0].isVerified === 1) {
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
                { expiresIn: "1h" }
              );

            //   console.log("utils token",token)
            resolve(token)
          }
          });
          conn.release();
        }
        )
      })
  },
};
