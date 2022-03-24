// Import Model
const {
  ProfilUser,
  ProfilUserCompagny,
} = require("../../models/employer/ProfilUserModel");

const jwt = require("jsonwebtoken");
const checkValidContentToken = require("../../utils/checkValidContentToken");

const func = require("../../utils/function"),
  path = require("path");

// const class du controlleur EmployerProfilControlleur
class EmployerProfilControllers {
  //action get ProfilUser
  async getProfilUser(req, res) {
    const decoded = jwt.decode(req.headers["authorization"], {
      complete: true,
    });
    const id = decoded.payload.id;

    try {
      ProfilUser.getById(String(id), async (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.json({
            method: req.method,
            status: "success",
            message: "",
            dataProfilUser: data,
            token: await checkValidContentToken.validContentToken(
              decoded.payload.mail,
              decoded.payload
            ),
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  //action Update mail ProfilUser
  async updateProfilUser(req, res) {
    const decoded = jwt.decode(req.headers["authorization"], {
      complete: true,
    });
    const id = decoded.payload.id;
    if (id && req.body.mail) {
      let profilUserObj = new ProfilUser({
        id: Number(id),
        mail: String(req.body.mail),
      });
      try {
        ProfilUser.editMail(
          profilUserObj,
          req.body.oldmail,
          async (err, data) => {
            if (err) {
              console.log("err", err),
                res.status(500).send({
                  message: err.message || "Une erreur est survenue",
                });
            } else {
              if (data.message === "errorEmail") {
                return res.json({
                  method: req.method,
                  status: "success",
                  message: "Adresse mail déjà utilisée",
                  dataProfilUser: data,
                  token: await checkValidContentToken.validContentToken(
                    decoded.payload.mail,
                    decoded.payload
                  ),
                });
              } else {
                return res.json({
                  method: req.method,
                  status: "success",
                  message: "Votre email a bien été modifié",
                  dataProfilUser: data,
                  token: await checkValidContentToken.validContentToken(
                    decoded.payload.mail,
                    decoded.payload
                  ),
                });
              }
            }
          }
        );
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  //action Update password ProfilUser
  async updateProfilUserPw(req, res) {
    const decoded = jwt.decode(req.headers["authorization"], {
      complete: true,
    });
    const id = decoded.payload.id;
    if (id && req.body.mail && req.body.password && req.body.oldPassword) {
      let profilUserObj = new ProfilUser({
        id: id,
        mail: req.body.mail,
        pass: req.body.password,
      });
      try {
        ProfilUser.editPw(
          profilUserObj,
          req.body.oldPassword,
          async (err, data, errorModel) => {
            if (err) {
              console.log("err", err),
                res.status(500).send({
                  message: err.message || "Une erreur est survenue",
                });
            } else {
              if (errorModel) {
                return res.json({
                  method: req.method,
                  status: "error",
                  message: "Votre ancien mot de passe est incorrect",
                  dataProfilUser: data,
                  token: await checkValidContentToken.validContentToken(
                    decoded.payload.mail,
                    decoded.payload
                  ),
                });
              } else {
                return res.json({
                  method: req.method,
                  status: "success",
                  message: "Votre mot de passe a bien été modifié",
                  dataProfilUser: data,
                  token: await checkValidContentToken.validContentToken(
                    decoded.payload.mail,
                    decoded.payload
                  ),
                });
              }
            }
          }
        );
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  //action get profil entreprise
  async getProfilCompagny(req, res) {
    const decoded = jwt.decode(req.headers["authorization"], {
      complete: true,
    });
    const id = decoded.payload.id
    try {
      ProfilUserCompagny.getProfilCompagnyById(
        String(id),
        async (err, data) => {
          if (err) {
            console.log("err", err),
              res.status(500).send({
                message: err.message || "Une erreur est survenue",
              });
          } else {
            return res.json({
              method: req.method,
              status: "success",
              message: "Votre profil entreprise",
              dataProfilEmployer: data,
              token: await checkValidContentToken.validContentToken(
                decoded.payload.mail,
                decoded.payload
              ),
            });
          }
        }
      );
    } catch (error) {
      throw error;
    }
  }

  //action modifier profil entreprise
  async updateProfilCompagny(req, res) {
    let profilUserCompagnyObj;

    const decoded = jwt.decode(req.headers["authorization"], {
      complete: true,
    });
    const id = decoded.payload.id;

    if (id > 0) {
      profilUserCompagnyObj = new ProfilUserCompagny({
        user_id: id,
        ...req.body,
      });
      try {
        ProfilUserCompagny.updateProfilCompagny(
          profilUserCompagnyObj,
          req.file,
          async (err, data) => {
            if (err) {
              console.log("err", err),
                res.status(500).send({
                  message: err.message || "Une erreur est survenue",
                  token: await checkValidContentToken.validContentToken(
                    decoded.payload.mail,
                    decoded.payload
                  ),
                });
            } else {
              return res.json({
                method: req.method,
                status: "success",
                message: "Votre profil entreprise a été modifié",
                dataProfilEmployer: data,
                token: await checkValidContentToken.validContentToken(
                  decoded.payload.mail,
                  decoded.payload
                ),
              });
            }
          }
        );
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }

  //  Plus utlisé dans l'application car profil crée par défaut au register
  // Utiliser pour test postman
  //action creation profil entreprise
  async createProfilCompagny(req, res) {
    let index = req.file.mimetype.indexOf("image");
    if (index !== -1) {
      // Recupère le chemin complet avec extention .webp ou l'image a été enregister avec sharp (avec le nom orignal)
      const pathImgWebp = path.resolve(
        pathAvatar +
        req.file.filename.split(".").slice(0, -1).join(".") +
        ".webp"
      );
      const pathAvatarWebp = path.resolve(
        pathAvatar + "avatar_user_" + req.body.user_id + ".webp"
      );
      setTimeout(function () {
        func.renameFile(pathImgWebp, pathAvatarWebp);
      }, 600);
    }
    if (req.body.user_id && req.file) {
      let profilUserCompagnyObj = new ProfilUserCompagny({
        avatar: pathAvatarDb + "avatar_user_" + req.body.user_id + ".webp",
        ...req.body,
      });
      try {
        ProfilUserCompagny.createProfilCompagny(
          profilUserCompagnyObj,
          (err, data) => {
            if (err) {
              console.log("err", err),
                res.status(500).send({
                  message: err.message || "Une erreur est survenue",
                });
            } else {
              return res.json({
                method: req.method,
                status: "success",
                message: "Votre profil entreprise a été crée",
                dataProfilEmployer: data,
              });
            }
          }
        );
      } catch (error) {
        throw error;
      }
    } else res.json("Error Request");
  }
}

module.exports = EmployerProfilControllers;
