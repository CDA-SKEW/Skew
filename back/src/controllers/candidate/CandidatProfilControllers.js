// Import Model

const req = require("express/lib/request");
const Candidat = require("../../models/CandidatModel");
const CandidatContact = require("../../models/ContactCandidatProfilModel");
// Import Module

require("dotenv").config();

class CandidatProfilControllers {
  // ##################
  // # PROFIL COMPLET #
  // ##################

  // PROFIL CANDIDAT GET ALL DATA

  async getProfil(req, res) {
    try {
      Candidat.getProfil((err, data) => {
        console.log("data res", data);
        if (err) {
          console.log("err", err),
            res.status(500).send({
            });
        } else {
          return res.json({
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

  // #################
  // # CONTACT TABLE #
  // #################

  // GET CONTACT PROFIL CANDIDAT

  async getContactProfil(req, res) {
    try {
      CandidatContact.getContactProfil(String(req.params.id), (err, data) => {
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

  //  UPDATE CONTACT PROFIL CANDIDAT 

  async updateContactProfil(req, res) {

    let candidatObj = new CandidatContact({
      user_id: Number(req.params.id),
      mail: String(req.body.mail),
      name: String(req.body.name),
      lastName: String(req.body.lastName),
      address: String(req.body.address),
      zipCode: Number(req.body.zipCode),
      town: String(req.body.town),
      phone: String(req.body.phone),
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
    console.log("controller GET Profil candidat EXPERIENCE");
    res.json({ message: "controller CREATE profil candidat EXPERIENCE" });
  }

  //  CREATE EXPERIENCE PROFIL CANDIDAT 

  async createExperienceProfil(req, res) {
    console.log("controller CREATE Profil candidat EXPERIENCE");
    res.json({ message: "controller CREATE profil candidat EXPERIENCE" });
  }

  //  UPDATE EXPERIENCE PROFIL CANDIDAT 

  async updateExperienceProfil(req, res) {
    console.log("controller UPDATE Profil Candidat EXPERIENCE");
    res.json({ message: "controller UPDATE profil candidat EXPERIENCE" });
  }

  //  DELETE EXPERIENCE PROFIL CANDIDAT 

  async deleteExperienceProfil(req, res) {
    console.log("controller DELETE Profil Candidat EXPERIENCE");
    res.json({ message: "controller DELETE profil candidat EXPERIENCE" });
  }

  // **************************************

  // ###############
  // # SKILL TABLE #
  // ###############

  //  GET SKILL PROFIL CANDIDAT 

  async getSkillProfil(req, res) {
    console.log("controller GET Profil candidat SKILL");
    res.json({ message: "controller GET profil candidat SKILL" });
  }

  //  CREATE SKILL PROFIL CANDIDAT

  async createSkillProfil(req, res) {
    console.log("controller CREATE Profil candidat SKILL");
    res.json({ message: "controller CREATE profil candidat SKILL" });
  }

  //  UPDATE SKILL PROFIL CANDIDAT 

  async updateSkillProfil(req, res) {
    console.log("controller UPDATE Profil Candidat SKILL");
    res.json({ message: "controller UPDATE profil candidat SKILL" });
  }

  //  DELETE SKILL PROFIL CANDIDAT 

  async deleteSkillProfil(req, res) {
    console.log("controller DELETE Profil Candidat SKILL");
    res.json({ message: "controller DELETE profil candidat SKILL" });
  }

  // **************************************

  // ##################
  // # INTEREST TABLE #
  // ##################

  //  GET INTEREST PROFIL CANDIDAT 

  async getInterest(req, res) {
    console.log("controller GET Profil candidat INTEREST");
    res.json({ message: "controller CREATE profil candidat INTEREST" });
  }

  //  CREATE INTEREST PROFIL CANDIDAT

  async createInterestProfil(req, res) {
    console.log("controller CREATE Profil candidat INTEREST");
    res.json({ message: "controller CREATE profil candidat INTEREST" });
  }

  //  UPDATE INTEREST PROFIL CANDIDAT 

  async updateInterestProfil(req, res) {
    console.log("controller UPDATE Profil Candidat INTEREST");
    res.json({ message: "controller UPDATE profil candidat INTEREST" });
  }

  //  DELETE INTEREST PROFIL CANDIDAT

  async deleteInterestProfil(req, res) {
    console.log("controller DELETE Profil Candidat INTEREST");
    res.json({ message: "controller DELETE profil candidat INTEREST" });
  }

  // **************************************

  // #####################
  // # CERTIFICATE TABLE #
  // #####################

  //  GET CERTIFICATE PROFIL CANDIDAT 

  async getCertificateProfil(req, res) {
    console.log("controller GET Profil candidat CERTIFICATE");
    res.json({ message: "controller CREATE profil candidat CERTIFICATE" });
  }

  //  CREATE CERTIFICATE PROFIL CANDIDAT

  async createCertificateProfil(req, res) {
    console.log("controller CREATE Profil candidat CERTIFICATE");
    res.json({ message: "controller CREATE profil candidat CERTIFICATE" });
  }

  //  UPDATE CERTIFICATE PROFIL CANDIDAT 

  async updateCertificateProfil(req, res) {
    console.log("controller UPDATE Profil Candidat CERTIFICATE");
    res.json({ message: "controller UPDATE profil candidat CERTIFICATE" });
  }

  //  DELETE CERTIFICATE PROFIL CANDIDAT

  async deleteCertificateProfil(req, res) {
    console.log("controller DELETE Profil Candidat CERTIFICATE");
    res.json({ message: "controller DELETE profil candidat CERTIFICATE" });
  }

  // **************************************

  // ##################
  // # DOCUMENT TABLE #
  // ##################

  //  GET CERTIFICATE PROFIL CANDIDAT 

  async getDocumentProfil(req, res) {
    console.log("controller GET Profil DOCUMENT");
    res.json({ message: "controller READ profil DOCUMENT" });
  }

  //  CREATE CERTIFICATE PROFIL CANDIDAT

  async createDocumentProfil(req, res) {
    console.log("controller CREATE Profil candidat DOCUMENT");
    res.json({ message: "controller CREATE profil candidat DOCUMENT" });
  }

  //  UPDATE CERTIFICATE PROFIL CANDIDAT 

  async updateDocumentProfil(req, res) {
    console.log("controller UPDATE Profil Candidat DOCUMENT");
    res.json({ message: "controller UPDATE profil candidat DOCUMENT" });
  }

  //  DELETE CERTIFICATE PROFIL CANDIDAT

  async deleteDocumentProfil(req, res) {
    console.log("controller DELETE Profil Candidat CERTIFICATE");
    res.json({ message: "controller DELETE profil candidat DOCUMENT" });
  }

  // **************************************

}


module.exports = CandidatProfilControllers;
