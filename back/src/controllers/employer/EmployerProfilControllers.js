// Import Model
const ProfilUser = require("../../models/employer/ProfilUser");
const ProfilUserCompagny = require("../../models/employer/ProfilUser");

// const class du controlleur EmployerProfilControlleur
class EmployerProfilControllers {
  async getProfilUser(req, res) {
    // console.log("controller get Profil user Employeur");

    // Appel de la fonction getById dans model ProfilUser en passant la data req.params.id
    try {
      //ici String est une coercion qui permet de typer la variable
      ProfilUser.getById(String(req.params.id), (err, data) => {
        // console.log("dataid res", data);
        //Si erreur alors affiche console log erreur et res.status
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
          //sinon on envoi les datas retournées du model en format json (data ds controller= result ds model)
        } else {
          return res.json({
            method: req.method,
            status: "success",
            flash: "Get User By Id !",
            message: "controller get user profil employer",
            dataProfilUser: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  //action get Update mail ProfilUser
  async updateProfilUser(req, res) {
    // console.log(
    //   "controller get Profil user Employeur",
    //   req.body,
    //   req.params.id
    // );
    if (req.params.id && req.body.mail && req.body.oldMail) {
      // console.log("controller update mail", req.body);
      let profilUserObj = new ProfilUser({
        id: Number(req.params.id),
        mail: String(req.body.mail),
      });
      // console.log("controller new profilUserObj", profilUserObj, req.body.oldMail);
      // Appel de la fonction editmail dans model ProfilUser en passant l'objet profilUserObj et req.body.oldMail
      try {
        ProfilUser.editMail(profilUserObj, req.body.oldMail, (err, data) => {
          //Si erreur alors affiche console log erreur et res.status
          if (err) {
            console.log("err", err),
              res.status(500).send({
                message: err.message || "Une erreur est survenue",
              });
          } else {
            //sinon on envoi les datas retournées du model en format json (data ds controller= result ds model)
            return res.json({
              method: req.method,
              status: "success",
              flash: "controller update user profil By ID !",
              message: "controller update user profil employer",
              dataProfilUser: data,
            });
          }
        });
      } catch (error) {
        throw error;
      }
      // res.json({ message: "controller update user profil employer" });
    } else res.json("Error Request");
  }

  async getProfilCompagny(req, res) {
    console.log("controller get profil Compagny");
    // Appel de la fonction getById dans model ProfilUser en passant la data req.params.id
    try {
      //ici String est une coercion qui permet de typer la variable
      ProfilUserCompagny.getProfilCompagnyById(String(req.params.id), (err, data) => {
        // console.log("dataid res", data);
        //Si erreur alors affiche console log erreur et res.status
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
          //sinon on envoi les datas retournées du model en format json (data ds controller= result ds model)
        } else {
          return res.json({
            method: req.method,
            status: "success",
            flash: "Get Compagny for User By Id !",
            message: "controller get profil Compagny",
            dataProfilEmployer: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async createProfilCompagny(req, res) {
    // console.log(
    //   "controller post Profil Compagny Employeur",
    //   req.body
    // );

    if (req.body.user_id) {
      // console.log("post Profil Compagny Employeur", req.body);
      let profilUserCompagnyObj = new ProfilUserCompagny({
        ...req.body,
      });
      // console.log("post Profil Compagny Employeur profilUserObj ", profilUserCompagnyObj );
      // Appel de la fonction editmail dans model ProfilUser en passant l'objet profilUserObj et req.body.oldMail
      try {
        ProfilUserCompagny.createProfilCompagny(
          profilUserCompagnyObj,
          (err, data) => {
            //Si erreur alors affiche console log erreur et res.status
            if (err) {
              console.log("err", err),
                res.status(500).send({
                  message: err.message || "Une erreur est survenue",
                });
            } else {
              //sinon on envoi les datas retournées du model en format json (data ds controller= result ds model)
              return res.json({
                method: req.method,
                status: "success",
                flash: "controller Create profil compagny !",
                message: "controller Create profil compagny",
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

  async updateProfilCompagny(req, res) {
    console.log("controller get Profil Employeur");
    res.json({ message: "controller update profil employer" });
  }
}

module.exports = EmployerProfilControllers;
