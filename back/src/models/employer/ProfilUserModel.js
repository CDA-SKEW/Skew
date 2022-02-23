// import module connection de la base de données
const connection = require("../../config/ConnectionDB");

// Module
const bcrypt = require("bcrypt");

//Creation du Constructeur profilUser pour exporter les fonctions dans ce model model
const ProfilUser = function (profilUser) {
  (this.id = Number(profilUser.id)),
    (this.mail = String(profilUser.mail)),
    (this.pass = String(profilUser.pass));
};
// console.log("profilUser dans model", ProfilUser);

//Creation du constructeur profilUserCompagny pour exporter les fonctions dans ce model model
const ProfilUserCompagny = function (profilUserCompagny) {
  (this.user_id = Number(profilUserCompagny.user_id)),
    (this.name = String(profilUserCompagny.name)),
    (this.address = String(profilUserCompagny.address)),
    (this.town = String(profilUserCompagny.town)),
    (this.zipCode = Number(profilUserCompagny.zipCode)),
    (this.avatar = String(profilUserCompagny.avatar)),
    (this.siret = Number(profilUserCompagny.siret));
  (this.siren = Number(profilUserCompagny.siren)),
    (this.category = String(profilUserCompagny.category));
};

// Get profil employer User (by id)
ProfilUser.getById = function (id, result) {
  // console.log("model Profiluser", id, result)
  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // si la connection est établie alors on fait la requete Sql,
    // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
    conn.query(
      `SELECT id,mail,date_update, date_create
     FROM user WHERE id = :id`,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data);
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// Update mail in profil employer User (by id)
ProfilUser.editMail = function (profilUserObj, result) {
  // console.log(
  //   "edit mail in Model:",
  //   "id:",
  //   typeof profilUserObj.id,
  //   profilUserObj.id,
  //   "mail:",
  //   profilUserObj.mail,
  // );
  //Declarations des constantes de profilUserCompagnyObj pour mysql
  const { mail, id } = profilUserObj;
  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    // ici on fait un update de la colonne mail de la table user par l'ID
    conn.query(
      `       UPDATE user
              SET mail=:mail
              WHERE id =:id
        `,
      { mail, id },
      (error, data) => {
        if (error) throw error;
        // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
        conn.query(
          `SELECT id,mail,date_update, date_create
          FROM user WHERE id = :id`,
          { id },
          (error, data) => {
            if (error) throw error;
            result(null, data);
          }
        );
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// Update mail in profil employer User (by id)
ProfilUser.editPw = function async(profilUserObj, oldPassword, result, error) {
  // console.log(
  //   "edit pw in Model:",
  //   "id:",
  //   typeof profilUserObj.id,
  //   profilUserObj.id,
  //   "mail:",
  //   profilUserObj.mail,
  //   "pass:",
  //   profilUserObj.pass,
  //   "oldPassword",
  //   oldPassword
  // );
  //Declarations des constantes de profilUserCompagnyObj pour mysql
  const { mail, id, pass } = profilUserObj;

  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `SELECT * FROM user where mail =:mail`,
      { mail },
      (error, data) => {
        // console.log("data", data[0].pass);
        if (error) throw error;
        // verifie si le mail existe
        if (data.length <= 0) {
          result(null, { message: "error" }, true);
          conn.release();
        }
        // Compare l'ancien mot de pass ds req.body hachés avec celui dans la db
        else
          bcrypt.compare(
            oldPassword,
            data[0].pass,
            async function (err, check) {
              if (err) throw err;
              if (check) {

                const passBcrypt = await bcrypt.hash(pass, 10)
                conn.query(
                  `UPDATE user
                SET pass =:passBcrypt
                WHERE id =:id
                `,
                  { passBcrypt,id },
                  (error, data) => {
                    if (error) throw error;
                    conn.query(
                      `SELECT id,mail,date_update, date_create
                    FROM user WHERE id = :id`,
                      { id },
                      (error, data) => {
                        if (error) throw error;
                        result(null, data);
                      }
                    );
                    conn.release();
                  }
                );
              } else result(null, { message: "error" }, true);
            }
          );
      }
    );
  });
};

// Get profil employer User (by id)
ProfilUserCompagny.getProfilCompagnyById = function (id, result) {
  // console.log("model Profiluser", id, result)

  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // si la connection est établie alors on fait la requete Sql,
    // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
    conn.query(
      `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
     FROM contactProfil WHERE user_id = :id`,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data);
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// Creation profil employer User
ProfilUserCompagny.createProfilCompagny = function (
  profilUserCompagnyObj,
  result
) {
  //Declarations des constantes de profilUserCompagnyObj pour mysql
  const {
    name,
    town,
    address,
    zipCode,
    avatar,
    siren,
    siret,
    category,
    user_id,
  } = profilUserCompagnyObj;
  // console.log("Model for create profil entreprise", profilUserCompagny);
  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    conn.query(
      `INSERT INTO contactProfil SET
      user_id=:user_id,
      name=:name,
      address=:address,
      town=:town,
      zipCode=:zipCode,
      avatar=:avatar,
      siret=:siret,
      siren=:siren,
      category=:category
        `,
      { user_id, name, address, town, zipCode, avatar, siret, siren, category },
      (error, data) => {
        if (error) throw error;
        // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
        conn.query(
          `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
         FROM contactProfil WHERE user_id = :user_id`,
          { user_id },
          (error, data) => {
            if (error) throw error;
            result(null, data);
            // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
          }
        );
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

// Update profil employer User
ProfilUserCompagny.updateProfilCompagny = function (
  profilUserCompagnyObj,
  result
) {
  //Declarations des constantes de profilUserCompagnyObj pour mysql
  const {
    name,
    town,
    address,
    zipCode,
    avatar,
    siren,
    siret,
    category,
    user_id,
  } = profilUserCompagnyObj;
  // console.log("Model for update profil entreprise", profilUserCompagnyObj);
  //ici on se connect à la base de donnée en appellant le module importé
  connection.getConnection(function (error, conn) {
    //ici on fait la requete SQL avec les datas déclarées en const au début de la fonction
    conn.query(
      `
      UPDATE contactProfil
      SET name = :name,
      address =:address,
      town = :town,
      zipCode = :zipCode,
      avatar = :avatar,
      siret = :siret,
      siren = :siren,
      category =:category
      WHERE user_id = :user_id;
    `,
      //ici on declare les values qui vont etre envoyées dasn la fonction queryFormat pour la gestion des simple cote
      // situé dans ConnectionDb.js dans dossier config
      { name, address, town, zipCode, avatar, siret, siren, category, user_id },
      (error, data) => {
        if (error) throw error;
        // ici on fait un select de la table user par l'ID en gradant que les colonnes id, mail, date update et date create
        conn.query(
          `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
         FROM contactProfil WHERE user_id = :user_id`,
          { user_id },
          (error, data) => {
            if (error) throw error;
            result(null, data);
            // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
          }
        );
        // Mettre fin à la connexion avec la db pour eviter que les data ne soit plus rendues au bout de 10 requetes (definit ds les options)
        conn.release();
      }
    );
  });
};

module.exports = { ProfilUser, ProfilUserCompagny };
