/*
 * Import Module
 * ************* */

const router = require("express").Router();

// Controllers
const AuthControllers = require("../controllers/AuthControllers");
const UserControllers = require("../controllers/UserControllers");
const EmployerProfilControllers = require("../controllers/EmployerProfilControllers");
const UsersControllers = require("../controllers/admin/UsersController");
const CandidateProfilControllers = ("../controllers/CandidatProfilControllers.js")

// Middlewares
const TestMD = require("../middlewares/Test_md");

/*
 * Routes
 * ****** */

// Authentification
router.route("/api/login").post(new AuthControllers().login);
// router.route("/api/register").post(new AuthControllers().register);

// Users
router
  .route("/api/user")
  .get(new UserControllers().getAll)
  .post(new UserControllers().post);

// Employeur profil
router
  .route("/api/employer/profil")
  .get(new EmployerProfilControllers().getProfil)
  .post(new EmployerProfilControllers().createProfil);

router
  .route("/api/employer/profil/:id")
  .put(new EmployerProfilControllers().updateProfil);

// CAndidat profil
router
  .route("/api/candidat/profil")
  .get(new CandidatProfilControllers().getProfil)
  .post(new CandidatProfilControllers().createProfil)
  .delete(new CandidatProfilControllers().deleteProfil);

router
  .route("/api/candidat/profil/:id")
  .put(new CandidatProfilControllers().updateProfil);

// Admin
router
  .route("/api/admin")
  .get(new UsersControllers().getAll)

router
  .route("/api/admin/:id")
  .get(new UsersControllers().getId)

// Authentification

// router.use(new TokenJWT().checkIsValid)
// Session

/*
 * / Routes
 * ******** */

module.exports = router;
