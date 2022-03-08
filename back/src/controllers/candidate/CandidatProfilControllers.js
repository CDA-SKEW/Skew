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
    // console.log('getProfile', req.params.id)
    try {
      Candidat.getProfil(String(req.params.id), (err, data) => {
        // console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
            });
        } else {
          // console.log('res getProfil')
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
    // console.log('REQ.BODY UPDATE', req.body);
    let candidatObj = new CandidatContact({
      id: Number(req.params.id),
      ...req.body

    });
    try {
      CandidatContact.updateContactProfil(candidatObj, (err, data) => {
        if (err) res.json(err);
        // console.log('RES JSON CONTACT', res);
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
    // console.log('REQ.BODY CREATE', req.body);
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
    // console.log('REQ.BODY CREATE', req.body);
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
    // console.log('REQ.BODY CREATE', req.body);
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

    console.log('REQ.BODY CREATE', req.body);
    let { isCertified } = req.body;
    console.log("isCertified", Boolean(isCertified));
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

  //  GET DOCUMENT PROFIL CANDIDAT 

  // async getDocumentProfil(req, res) {
  //   // console.log("controller GET Profil DOCUMENT");
  //   res.json({ message: "controller READ profil DOCUMENT" });
  // }

  //  CREATE DOCUMENT PROFIL CANDIDAT

  async createDocumentProfil(req, res) {
    // console.log('Controller req.file', req.file, req.body);
    // console.log("controller CREATE Profil candidat DOCUMENT");
    // console.log('REQ.BODY CREATE', req.body);
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

    // res.json({ message: "controller CREATE profil candidat DOCUMENT" });
  }

  //  UPDATE DOCUMENT PROFIL CANDIDAT 

  // async updateDocumentProfil(req, res) {
  //   // console.log("controller UPDATE Profil Candidat DOCUMENT");
  //   res.json({ message: "controller UPDATE profil candidat DOCUMENT" });
  // }

  //  DELETE DOCUMENT PROFIL CANDIDAT

  async deleteDocumentProfil(req, res) {
    // console.log("controller DELETE Profil Candidat CERTIFICATE");
    res.json({ message: "controller DELETE profil candidat DOCUMENT" });
  }

  // **************************************

}


module.exports = CandidatProfilControllers;

