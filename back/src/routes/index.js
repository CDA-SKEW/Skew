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
const UsersControllers = require("../controllers/admin/UsersController");

//Employer
const EmployerProfilControllers = require("../controllers/employer/EmployerProfilControllers");
const EmployerProfilUserControllers = require("../controllers/employer/EmployerProfilUserControllers");
const EmployerOfferControllers = require("../controllers/employer/EmployerOfferControllers");
const EmployerCandidateStatutControllers = require("../controllers/employer/EmployerCandidateStatutControllers");
const EmployerMessageCandidateControllers = require("../controllers/employer/EmployerMessageCandidateControllers");

//Candidat
const CandidatProfilControllers = require("../controllers/candidate/CandidatProfilControllers");

// Middlewares
const TestMD = require("../middlewares/Test_md");

// router.route('/api/testUser').post(new CandidatProfilControllers().testUser)

/*
 * Routes
 * ****** */
//------------------------------------------------------------
// Authentification
router.route("/api/login").post(new AuthControllers().login);
// router.route("/api/register").post(new AuthControllers().register);

// Users
router
  .route("/api/user")
  .get(new UserControllers().getAll)
  .post(new UserControllers().post);

//------------------------------------------------------------
// Employeur

// Employeur user profil
router
  .route("/api/employer/profilUser")
  .get(new EmployerProfilUserControllers().getProfilUser)

// Employeur user profil Id
router
  .route("/api/employer/profilUser/:id")
  .put(new EmployerProfilUserControllers().updateProfilUser);

// Employeur entreprise profil
router
  .route("/api/employer/profil")
  .get(new EmployerProfilControllers().getProfil)
  .post(new EmployerProfilControllers().createProfil);

// Employeur entreprise profil Id
router
  .route("/api/employer/profil/:id")
  .put(new EmployerProfilControllers().updateProfil);

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

//#####################################
//# Candidat profil GET PROFIL COMPLET#
//#####################################
router
  .route("/api/candidat/profil")
  .get(new CandidatProfilControllers().getProfil)

//#########################################
//# Candidat profil-Contact Table-CONTACT #
//#########################################

router
  .route("/api/candidat/profil/contact/:id")
  .get(new CandidatProfilControllers().getContactProfil)
  .put(new CandidatProfilControllers().updateContactProfil)

// ############################################
// #CandidatProfilExperience Table-EXPERIENCE #
// ############################################

router
  .route("/api/candidat/profil/experience")
  .get(new CandidatProfilControllers().getExperienceProfil)
  .post(new CandidatProfilControllers().createExperienceProfil)

router
  .route("/api/candidat/profil/experience/:id")
  .put(new CandidatProfilControllers().updateExperienceProfil)
  .delete(new CandidatProfilControllers().deleteExperienceProfil)

// ##################################
// #CandidatProfilSkill Table-SKILL #
// ##################################
router
  .route("/api/candidat/profil/skill")
  .get(new CandidatProfilControllers().getSkillProfil)
  .post(new CandidatProfilControllers().createSkillProfil)

router
  .route("/api/candidat/profil/skill/:id")
  .put(new CandidatProfilControllers().updateSkillProfil)
  .delete(new CandidatProfilControllers().deleteSkillProfil)

// ########################################
// #CandidatProfilInterest Table-INTEREST #
// ################################
router
  .route("/api/candidat/profil/interest")

router
  .route("/api/candidat/profil/interest/:id")
  .put(new CandidatProfilControllers().updateInterestProfil)
  .delete(new CandidatProfilControllers().deleteInterestProfil)

// ##############################################
// #CandidatProfilCertificate Table-CERTIFICATE #
// ##############################################
router
  .route("/api/candidat/profil/certificate")
  .get(new CandidatProfilControllers().getCertificateProfil)
  .post(new CandidatProfilControllers().createCertificateProfil)

router
  .route("/api/candidat/profil/certificate/:id")
  .put(new CandidatProfilControllers().updateCertificateProfil)
  .delete(new CandidatProfilControllers().deleteCertificateProfil)

// ########################################
// #CandidatProfilDocument Table-DOCUMENT #
// ########################################
router
  .route("/api/candidat/profil/document")
  .get(new CandidatProfilControllers().getDocumentProfil)
  .post(new CandidatProfilControllers().createDocumentProfil)

router
  .route("/api/candidat/profil/document/:id")
  .put(new CandidatProfilControllers().updateDocumentProfil)
  .delete(new CandidatProfilControllers().deleteDocumentProfil)

//############################################################
//#                   FIN ROUTEUR CANDIDAT                   #
//############################################################ 

//------------------------------------------------------------

// Admin
router.route("/api/admin").get(new UsersControllers().getAll);

router.route("/api/admin/:id").get(new UsersControllers().getId);

// Authentification

// router.use(new TokenJWT().checkIsValid)
// Session

/*
 * / Routes
 * ******** */

module.exports = router;
