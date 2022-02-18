/*
 * Import Module
 * ************* */

const router = require("express").Router();

//#############
//#Controllers#
//#############

//User
const AuthControllers = require("../controllers/AuthControllers");
const UserControllers = require("../controllers/UserControllers");

//Employer
const EmployerProfilControllers = require("../controllers/employer/EmployerProfilControllers");
const EmployerOfferControllers = require("../controllers/employer/EmployerOfferControllers");
const EmployerCandidateStatutControllers = require("../controllers/employer/EmployerCandidateStatutControllers");
const EmployerMessageCandidateControllers = require("../controllers/employer/EmployerMessageCandidateControllers");

//Candidat
const CandidatProfilControllers = require("../controllers/candidate/CandidatProfilControllers");
const CandidatProfilControllersContact = require("../controllers/candidate/CandidatProfilControllersContact");
const CandidatProfilControllersExperience = require("../controllers/candidate/CandidatProfilControllersExperience");
const CandidatProfilControllersSkill = require("../controllers/candidate/CandidatProfilControllersSkill");
const CandidatProfilControllersInterest = require("../controllers/candidate/CandidatProfilControllersInterest");
const CandidatProfilControllersCertificate = require("../controllers/candidate/CandidatProfilControllersCertificate");
const CandidatProfilControllersDocument = require("../controllers/candidate/CandidatProfilControllersDocument");

// Admin
const UsersController = require("../controllers/admin/UsersController");
const JobsController = require("../controllers/admin/JobsController");
const MessagesController = require("../controllers/admin/MessagesController");

// Middlewares
const TestMD = require("../middlewares/Test_md");
const TokenJWT = require("../middlewares/Token_jwt")

/*
 * Routes
 * ****** */
//------------------------------------------------------------
// Authentification
router.route("/api/login")
  .post(new AuthControllers().login);
router.route("/api/register")
  .post(new AuthControllers().register);

// Check
router.route("/api/auth/:token")
  .get(new TokenJWT().checkIsValid, new AuthControllers().checkToken);
  
// Users
router
  .route("/api/user")
  .get(new UserControllers().getAll)
  .post(new UserControllers().post);

//------------------------------------------------------------
// Employeur

// Employeur user profil
router
  .route("/api/employer/profilUser/:id")
  .get(new EmployerProfilControllers().getProfilUser);

// Employeur user profil Id
router
  .route("/api/employer/profilUser/:id")
  .put(new EmployerProfilControllers().updateProfilUser);

// Employeur entreprise profil
router
  .route("/api/employer/profil")
  .post(new EmployerProfilControllers().createProfilCompagny);

// Employeur entreprise profil Id
router
  .route("/api/employer/profil/:id")
  .get(new EmployerProfilControllers().getProfilCompagny)
  .put(new EmployerProfilControllers().updateProfilCompagny);

// Employeur offer
router
  .route("/api/employer/offer")
  .get(new EmployerOfferControllers().getOffer)
  .post(new EmployerOfferControllers().createOffer);

// Employeur offerid
router
  .route("/api/employer/offer/:id")
  .delete(new EmployerOfferControllers().delOffer);

// Employeur statut candidat offer
router
  .route("/api/employer/offer/candidat/:id")
  .put(new EmployerCandidateStatutControllers().updateCandidate);

// Employeur send message candidate
router
  .route("/api/employer/candidat/message/")
  .post(new EmployerMessageCandidateControllers().createMessage);

//------------------------------------------------------------

//###################
//# Candidat profil #
//###################
router
  .route("/api/candidat/profil")
  .get(new CandidatProfilControllers().getProfil);

//#########################################
//# Candidat profil-Contact Table-CONTACT #
//#########################################
router
  .route("/api/candidat/profil/contact")
  .post(new CandidatProfilControllersContact().createProfilContact);

router
  .route("/api/candidat/profil/contact/:id")
  .put(new CandidatProfilControllersContact().updateProfilContact)
  .delete(new CandidatProfilControllersContact().deleteProfilContact);

// ############################################
// #CandidatProfilExperience Table-EXPERIENCE #
// ############################################
router
  .route("/api/candidat/profil/experience")
  .post(new CandidatProfilControllersExperience().createProfilExperience);

router
  .route("/api/candidat/profil/experience/:id")
  .put(new CandidatProfilControllersExperience().updateProfilExperience)
  .delete(new CandidatProfilControllersExperience().deleteProfilExperience);

// ##################################
// #CandidatProfilSkill Table-SKILL #
// ##################################
router
  .route("/api/candidat/profil/skill")
  .post(new CandidatProfilControllersSkill().createProfilSkill);

router
  .route("/api/candidat/profil/skill/:id")
  .put(new CandidatProfilControllersSkill().updateProfilSkill)
  .delete(new CandidatProfilControllersSkill().deleteProfilSkill);

// ########################################
// #CandidatProfilInterest Table-INTEREST #
// ########################################
router
  .route("/api/candidat/profil/interest")
  .post(new CandidatProfilControllersInterest().createProfilInterest);

router
  .route("/api/candidat/profil/interest/:id")
  .put(new CandidatProfilControllersInterest().updateProfilInterest)
  .delete(new CandidatProfilControllersInterest().deleteProfilInterest);

// ##############################################
// #CandidatProfilCertificate Table-CERTIFICATE #
// ##############################################
router
  .route("/api/candidat/profil/certificate")
  .post(new CandidatProfilControllersCertificate().createProfilCertificate);

router
  .route("/api/candidat/profil/certificate/:id")
  .put(new CandidatProfilControllersCertificate().updateProfilCertificate)
  .delete(new CandidatProfilControllersCertificate().deleteProfilCertificate);

// ######################################
// #CandidatProfilDocument Table-DOCUMENT #
// ########################################
router
  .route("/api/candidat/profil/document")
  .get(new CandidatProfilControllersDocument().getProfilDocument)
  .post(new CandidatProfilControllersDocument().createProfilDocument);

router
  .route("/api/candidat/profil/document/:id")
  .put(new CandidatProfilControllersDocument().updateProfilDocument)
  .delete(new CandidatProfilControllersDocument().deleteProfilDocument);

//############################################################
//#                   FIN ROUTEUR CANDIDAT                   #
//############################################################

//------------------------------------------------------------

// Admin

// GET
router.route("/api/admin").get(new UsersController().getUserAll);
router.route("/api/admin/jobs").get(new JobsController().getJobAll);
router.route("/api/admin/messages").get(new MessagesController().getMessageAll);
// GET ID
router.route("/api/admin/:id").get(new UsersController().getUserId);
router.route("/api/admin/jobs/:id").get(new JobsController().getJobId);
router.route("/api/admin/messages/:id").get(new MessagesController().getMessageId);

// Authentification

// router.use(new TokenJWT().checkIsValid)
// Session

/*
 * / Routes
 * ******** */

module.exports = router;
