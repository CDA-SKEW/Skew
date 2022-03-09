const jwt = require("jsonwebtoken");

require("dotenv").config();

class TokenJWT {
  checkIsValid(req, res, next) {
    try {
      const auth = jwt.verify(
        req.params.token,
        process.env.SIGN_JWT,
        (err, decoded) => {
          if (err) return;
          return decoded;
        }
      );
      if (!auth) return res.json({ auth: false });
      else next();
      if (!auth) res.status(403).send("Invalid token");
      else next();
    } catch (error) {
      throw error;
    }
  }

  checkToken(req, res, next) {
    // console.log("req.headers token", req.headers.authorization);
    try {
      // console.log("dans try");
      const auth = jwt.verify(
        req.headers.authorization,
        process.env.SIGN_JWT,
        (err, decoded) => {
          if (err) return;
          // console.log("decode jwt:", decoded);
          return decoded;
        }
      );
      // console.log("middleware auth", auth);    
      if (!auth) res.json({message:"Invalid token"});
      else next()
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TokenJWT;
