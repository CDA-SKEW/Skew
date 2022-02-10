/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const AuthControllers = require('../controllers/AuthControllers')
const UserControllers = require("../controllers/UserControllers");

// Middlewares
const TestMD = require("../middlewares/Test_md");

/*
 * Routes
 * ****** */

// User
router
  .route("/api/user")
  .get(new TestMD().firstMD, new UserControllers().getAll);

// User ID

// Authentification

// router.use(new TokenJWT().checkIsValid)
// Session

/*
 * / Routes
 * ******** */

module.exports = router;
