/*
 * Import Module
 * ************* */
const router = require("express").Router();

const upload = require("../config/multer"),
  sharp = require("../config/sharp");

//#############
//#Controllers#
//#############

//User
const AuthControllers = require("../controllers/AuthControllers");
const UserControllers = require("../controllers/UserControllers");

//Message
const ContactControllers = require("../controllers/ContactControllers");

// Offres visiteur
const OffreVisiteurControllers = require("../controllers/OffreVisiteurControllers");

//Employer
const EmployerProfilControllers = require("../controllers/employer/EmployerProfilControllers");
const EmployerOfferControllers = require("../controllers/employer/EmployerOfferControllers");

//Candidat
const CandidatProfilControllers = require("../controllers/candidate/CandidatProfilControllers");

// Admin
const UsersController = require("../controllers/admin/UsersController");
const JobsController = require("../controllers/admin/JobsController");
const MessagesController = require("../controllers/admin/MessagesController");

// Middlewares
const TestMD = require("../middlewares/Test_md");
const TokenJWT = require("../middlewares/Token_jwt");

// router.route('/api/testUser').post(new CandidatProfilControllers().testUser)

/*
 * Routes
 * ****** */
//------------------------------------------------------------
// Authentification
router.route("/api/login").post(new AuthControllers().login);
router.route("/api/register").post(new AuthControllers().register);

// Check
router
  .route("/api/auth/:token").get(new TokenJWT().checkIsValid, new AuthControllers().checkToken);
router
  .route("/api/auth/verify/:id").get(new AuthControllers().verifMail)

// Mot de passe oublié
router
.route("/api/auth/mailLostMdp").post(new AuthControllers().mailLostMdp)

// Messages
router.route("/api/contact").post(new ContactControllers().post);

// Offres visiteur
router.route("/api/offresvisiteur").get(new OffreVisiteurControllers().getAll);
router.route("/api/offresvisiteur/:id").get(new OffreVisiteurControllers().getOne);

// Users
router
  .route("/api/user")
  .get(new UserControllers().getAll)
  .post(new UserControllers().post);

//------------------------------------------------------------
// Employeur

// Employeur user profil
router
  .route("/api/employer/dashboard/:id")
  .get(new EmployerOfferControllers().getDashboard);

// Employeur user profil
router
  .route("/api/employer/profilUser/:id")
  .get(new EmployerProfilControllers().getProfilUser);

// Employeur user profil Id
router
  .route("/api/employer/profilUser/:id")
  .put(new EmployerProfilControllers().updateProfilUser);

// Employeur user profil password Id
router
  .route("/api/employer/profilUserPw/:id")
  .put(new EmployerProfilControllers().updateProfilUserPw);

// Employeur entreprise profil
router
  .route("/api/employer/profil")
  .post(
    upload.single("avatar"),
    sharp,
    new EmployerProfilControllers().createProfilCompagny
  );

// Employeur entreprise profil Id
router
  .route("/api/employer/profil/:id")
  .get(new EmployerProfilControllers().getProfilCompagny)
  .put(
    upload.single("avatar"),
    sharp,
    new EmployerProfilControllers().updateProfilCompagny
  );

// Employeur offer
router
  .route("/api/employer/offer")
  .get(new EmployerOfferControllers().getOffer)
  .post(new EmployerOfferControllers().createOffer);

// Employeur offerid
router
  .route("/api/employer/offer/:id")
  .get(new EmployerOfferControllers().getOfferId)
  .delete(new EmployerOfferControllers().delOffer);

// Employeur statut candidat offer
router
  .route("/api/employer/offer/candidat/:id")
  .put(new EmployerOfferControllers().updateCandidate);

// Employeur send message candidate
router
  .route("/api/employer/candidat/message")
  .post(new EmployerOfferControllers().createMessageCandidate);

//------------------------------------------------------------

//#####################################
//# Candidat profil GET PROFIL COMPLET#
//#####################################
router
  .route("/api/candidat/profil/:id")
  .get(new CandidatProfilControllers().getProfil);

//#########################################
//# Candidat profil-Contact Table-CONTACT #
//#########################################

router
  .route("/api/candidat/profil/contact/:id")
  // .get(new CandidatProfilControllers().getContactProfil)
  .put(new CandidatProfilControllers().updateContactProfil)

// ############################################
// #CandidatProfilExperience Table-EXPERIENCE #
// ############################################

router
  .route("/api/candidat/profil/experience")
  // .get(new CandidatProfilControllers().getExperienceProfil)
  .post(new CandidatProfilControllers().createExperienceProfil)

router
  .route("/api/candidat/profil/experience/:id")
  .get(new CandidatProfilControllers().getExperienceProfil)
  .put(new CandidatProfilControllers().updateExperienceProfil)
  .delete(new CandidatProfilControllers().deleteExperienceProfil);

// ##################################
// #CandidatProfilSkill Table-SKILL #
// ##################################
router
  .route("/api/candidat/profil/skill")
  // .get(new CandidatProfilControllers().getSkillProfil)
  .post(new CandidatProfilControllers().createSkillProfil)

router
  .route("/api/candidat/profil/skill/:id")
  .get(new CandidatProfilControllers().getSkillProfil)
  .put(new CandidatProfilControllers().updateSkillProfil)
  .delete(new CandidatProfilControllers().deleteSkillProfil);

// ########################################
// #CandidatProfilInterest Table-INTEREST #
// ########################################
router
  .route("/api/candidat/profil/interest")
  .post(new CandidatProfilControllers().createInterestProfil)
router
  .route("/api/candidat/profil/interest/:id")
  .get(new CandidatProfilControllers().getInterestProfil)
  .put(new CandidatProfilControllers().updateInterestProfil)
  .delete(new CandidatProfilControllers().deleteInterestProfil);

// ##############################################
// #CandidatProfilCertificate Table-CERTIFICATE #
// ##############################################
router
  .route("/api/candidat/profil/certificate")
  // .get(new CandidatProfilControllers().getCertificateProfil)
  .post(new CandidatProfilControllers().createCertificateProfil)

router
  .route("/api/candidat/profil/certificate/:id")
  .get(new CandidatProfilControllers().getCertificateProfil)
  .put(new CandidatProfilControllers().updateCertificateProfil)
  .delete(new CandidatProfilControllers().deleteCertificateProfil);

// ########################################
// #CandidatProfilDocument Table-DOCUMENT #
// ########################################
router
  .route("/api/candidat/profil/document")
  .get(new CandidatProfilControllers().getDocumentProfil)
  .post(new CandidatProfilControllers().createDocumentProfil);

router
  .route("/api/candidat/profil/document/:id")
  .put(new CandidatProfilControllers().updateDocumentProfil)
  .delete(new CandidatProfilControllers().deleteDocumentProfil);

//############################################################
//#                   FIN ROUTEUR CANDIDAT                   #
//############################################################

//------------------------------------------------------------

// ADMIN

// Jobs
router.route("/api/admin/jobs").get(new JobsController().getListJobs);

router
  .route("/api/admin/jobs/:id")
  // .get(new JobsController().getJobId)
  .delete(new JobsController().deleteJob);

// Messages
router
  .route("/api/admin/messages")
  .get(new MessagesController().getListMessages)
  .post(new MessagesController().replyMessage);
router
  .route("/api/admin/messages/:id")
  .get(new MessagesController().getMessageId)
  .delete (new MessagesController().deleteMessage);

// Users
router.route("/api/admin/users").get(new UsersController().getListUsers);
router
  .route("/api/admin/users/:id")
  // .get(new UsersController().getUserId)
  .put(new UsersController().putUser)
  .delete(new UsersController().deleteUser);
router.route("/api/admin/users/badge/:id").put(new UsersController().putBadge);

// Session

/*
 * / Routes
 * ******** */

module.exports = router;
