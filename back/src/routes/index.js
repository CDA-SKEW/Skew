/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const UserControllers = require("../controllers/UserControllers");

// Middlewares
const TestMD = require("../middlewares/Test_md");

/*
 * Routes
 * ****** */

// Article
router
  .route("/api/user")
  .get(new TestMD().firstMD, new UserControllers().getAll);

// Article ID

// Authentification

// router.use(new TokenJWT().checkIsValid)
// Session

/*
 * / Routes
 * ******** */

module.exports = router;
