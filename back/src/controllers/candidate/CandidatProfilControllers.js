// Import Model

const req = require("express/lib/request");
const Candidat = require("../../models/candidat/CandidatModel");
const CandidatContact = require("../../models/candidat/ContactCandidatProfilModel");
const CandidatExperience = require("../../models/candidat/ExperienceCandidatProfilModel");
const CandidatSkill = require("../../models/candidat/SkillCandidatProfilModel");
const CandidatInterest = require("../../models/candidat/InterestCandidatProfilModel");
const CandidatCertificate = require("../../models/candidat/CertificateCandidatProfilModel");
const CandidatDocument = require("../../models/candidat/DocumentCandidat")
// Import Module

require("dotenv").config();

class CandidatProfilControllers {
  // ##################
  // # PROFIL COMPLET #
  // ##################

  // PROFIL CANDIDAT GET ALL DATA

  async getProfil(req, res) {
    try {
      Candidat.getProfil(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
            });
        } else {
          return res.json({
            method: req.method,
            userProfil: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  // **************************************

  // #################
  // # CONTACT TABLE #
  // #################


  //  UPDATE CONTACT PROFIL CANDIDAT 

  async updateContactProfil(req, res) {
    let candidatObj = new CandidatContact({
      id: Number(req.params.id),
      ...req.body

    });
    try {
      CandidatContact.updateContactProfil(candidatObj, (err, data) => {
        if (err) res.json(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  // **************************************

  // ####################
  // # EXPERIENCE TABLE #
  // ####################

  //  GET EXPERIENCE PROFIL CANDIDAT 

  async getExperienceProfil(req, res) {
    try {
      CandidatExperience.getExperienceProfil(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            User: data,
          })
        }
      });
    }
    catch (error) {
      throw error;
    }
  }


  //  CREATE EXPERIENCE PROFIL CANDIDAT 

  async createExperienceProfil(req, res) {
    let newExperience = new CandidatExperience({
      ...req.body
    });
    try {
      CandidatExperience.createExperienceProfil(newExperience, (err, data) => {
        if (err) res.send(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }

  }

  //  UPDATE EXPERIENCE PROFIL CANDIDAT 

  async updateExperienceProfil(req, res) {
    let experienceObj = new CandidatExperience({
      id: Number(req.params.id),
      ...req.body
    });
    try {
      CandidatExperience.updateExperienceProfil(experienceObj, (err, data) => {
        if (err) res.json(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  //  DELETE EXPERIENCE PROFIL CANDIDAT 

  async deleteExperienceProfil(req, res) {
    try {
      CandidatExperience.deleteExperienceProfil(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            User: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }


  // **************************************

  // ###############
  // # SKILL TABLE #
  // ###############

  //  GET SKILL PROFIL CANDIDAT 

  async getSkillProfil(req, res) {
    try {
      CandidatSkill.getSkillProfil(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            User: data,
          })
        }
      });
    }
    catch (error) {
      throw error;
    }

  }

  //  CREATE SKILL PROFIL CANDIDAT

  async createSkillProfil(req, res) {
    let newSkill = new CandidatSkill({
      ...req.body
    });
    try {
      CandidatSkill.createSkillProfil(newSkill, (err, data) => {
        if (err) res.send(err);
        return res.json({
          method: req.method,
          message: 'user created',
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  //  UPDATE SKILL PROFIL CANDIDAT 

  async updateSkillProfil(req, res) {
    let skillObj = new CandidatSkill({
      id: Number(req.params.id),
      ...req.body
    });
    try {
      CandidatSkill.updateSkillProfil(skillObj, (err, data) => {
        if (err) res.json(err);
        return res.json({
          method: req.method,
          message: 'user updated',
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  //  DELETE SKILL PROFIL CANDIDAT 

  async deleteSkillProfil(req, res) {
    try {
      CandidatSkill.deleteSkillProfil(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            User: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  // **************************************

  // ##################
  // # INTEREST TABLE #
  // ##################

  //  GET INTEREST PROFIL CANDIDAT 

  async getInterestProfil(req, res) {
    try {
      CandidatInterest.getInterestProfil(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            User: data,
          })
        }
      });
    }
    catch (error) {
      throw error;
    }
  }

  //  CREATE INTEREST PROFIL CANDIDAT

  async createInterestProfil(req, res) {
    let newInterest = new CandidatInterest({
      ...req.body
    });
    try {
      CandidatInterest.createInterestProfil(newInterest, (err, data) => {
        if (err) res.send(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  //  UPDATE INTEREST PROFIL CANDIDAT 

  async updateInterestProfil(req, res) {
    let interestObj = new CandidatInterest({
      id: Number(req.params.id),
      ...req.body
    });
    try {
      CandidatInterest.updateInterestProfil(interestObj, (err, data) => {
        if (err) res.json(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  //  DELETE INTEREST PROFIL CANDIDAT

  async deleteInterestProfil(req, res) {
    try {
      CandidatInterest.deleteInterestProfil(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            User: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  // **************************************

  // #####################
  // # CERTIFICATE TABLE #
  // #####################

  //  GET CERTIFICATE PROFIL CANDIDAT 

  async getCertificateProfil(req, res) {

    try {
      CandidatCertificate.getCertificateProfil(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            User: data,
          })
        }
      });
    }
    catch (error) {
      throw error;
    }
  }

  //  CREATE CERTIFICATE PROFIL CANDIDAT

  async createCertificateProfil(req, res) {
    let newCertificate = new CandidatCertificate({
      ...req.body
    });
    try {
      CandidatCertificate.createCertificateProfil(newCertificate, (err, data) => {
        if (err) res.send(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }

  }

  //  UPDATE CERTIFICATE PROFIL CANDIDAT 

  async updateCertificateProfil(req, res) {

    let { isCertified } = req.body;
    isCertified = isCertified === "true" ? 1 : 0;
    let certificateObj = new CandidatCertificate({
      id: Number(req.params.id),
      ...req.body
    });
    try {
      CandidatCertificate.updateCertificateProfil(certificateObj, (err, data) => {
        if (err) res.json(err);
        return res.json({
          method: req.method,
          User: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  //  DELETE CERTIFICATE PROFIL CANDIDAT

  async deleteCertificateProfil(req, res) {
    try {
      CandidatCertificate.deleteCertificateProfil(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            User: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  // **************************************

  // ##################
  // # DOCUMENT TABLE #
  // ##################


  //  CREATE DOCUMENT PROFIL CANDIDAT

  async createDocumentProfil(req, res) {
    // req.body.name = req.nameEditCV
    let newDocument = new CandidatDocument({
      ...req.body
    });
    try {
      CandidatDocument.createDocumentProfil(
        newDocument,
        req.file,
        (err, data) => {
          if (err) res.send(err);
          return res.json({
            method: req.method,
            User: data,
          });
        });
    } catch (error) {
      throw error;
    }
  }

  //  DELETE DOCUMENT PROFIL CANDIDAT

  async deleteDocumentProfil(req, res) {
    try {
      CandidatDocument.deleteDocumentProfil(req.params.id, (err, data) => {
        if (err) res.send(err);
        else {
          return res.send({
            method: req.method,
            User: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  // **************************************

}


module.exports = CandidatProfilControllers;

