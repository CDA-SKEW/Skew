/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const AuthControllers = require('../controllers/AuthControllers')
const UserControllers = require("../controllers/UserControllers");
const EmployerProfilControllers = require("../controllers/EmployerProfilControllers")

// Middlewares
const TestMD = require("../middlewares/Test_md");

/*
 * Routes
 * ****** */

// User
router
  .route("/api/user")
  .get(new TestMD().firstMD, new UserControllers().getAll)
  .post(new TestMD().firstMD, new UserControllers().post)

// Employeur profil
router
  .route("/api/employer/profil")
  .get(new EmployerProfilControllers().getProfil)
  .post(new EmployerProfilControllers().createProfil)

router
  .route("/api/employer/profil/:id")
  .put(new EmployerProfilControllers().updateProfil)




// Authentification

// router.use(new TokenJWT().checkIsValid)
// Session

/*
 * / Routes
 * ******** */

module.exports = router;
