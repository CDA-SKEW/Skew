// import module connection de la base de données
const connection = require("../../config/ConnectionDB");

// Module
const bcrypt = require("bcrypt");

const func = require("../../utils/function"),
  path = require("path");

//Creation du Constructeur profilUser pour exporter les fonctions dans ce model model
const ProfilUser = function (profilUser) {
  (this.id = Number(profilUser.id)),
    (this.mail = String(profilUser.mail)),
    (this.pass = String(profilUser.pass));
};

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

// Get profil User (by id)
ProfilUser.getById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `SELECT id,mail,date_update, date_create
     FROM user WHERE id = :id`,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data[0]);
        conn.release();
      }
    );
  });
};

// Update mail in profil employer User (by id)
ProfilUser.editMail = function (profilUserObj, oldMail, result) {
  //Declarations des constantes de profilUserCompagnyObj pour mysql
  const { mail, id } = profilUserObj;
  connection.getConnection(function (error, conn) {
    conn.query(
      `SELECT u.mail
        From user as u
        WHERE id =:id
        `,
      { id },
      (error, data) => {
        if (error) throw error;
        if (oldMail === data[0].mail) {
          conn.query(
            `SELECT id,mail,date_update, date_create FROM user WHERE mail = "${mail}"`,
            async (error, data) => {
              if (error) throw error;
              if (data.length <= 0) {
                conn.query(
                  `  UPDATE user
                    SET mail=:mail
                    WHERE id =:id
                `,
                  { mail, id },
                  (error, data) => {
                    if (error) throw error;
                    conn.query(
                      `SELECT id,mail,date_update, date_create
                  FROM user WHERE id = :id`,
                      { id },
                      (error, data) => {
                        if (error) throw error;
                        result(null, data[0]);
                      }
                    );
                  }
                );
              } else {
                result(null, { id: id, mail: oldMail, message: "errorEmail" });
              }
            }
          );
        } else result(null, { message: "error" }, true);
      }
    );
    conn.release();
  });
};

// Update pw in profil employer User (by id)
ProfilUser.editPw = function async(profilUserObj, oldPassword, result) {
  //Declarations des constantes de profilUserCompagnyObj pour mysql
  const { mail, id, pass } = profilUserObj;

  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `SELECT * FROM user where mail =:mail`,
      { mail },
      (error, data) => {
        if (error) throw error;
        if (data.length <= 0) {
          result(null, true);
          conn.release();
        } else
          bcrypt.compare(
            oldPassword,
            data[0].pass,
            async function (err, check) {
              if (err) throw err;
              if (check) {
                const passBcrypt = await bcrypt.hash(pass, 10);
                conn.query(
                  `UPDATE user
                SET pass =:passBcrypt
                WHERE id =:id
                `,
                  { passBcrypt, id },
                  (error, data) => {
                    if (error) throw error;
                    conn.query(
                      `SELECT id,mail,date_update
                    FROM user WHERE id = :id`,
                      { id },
                      (error, data) => {
                        if (error) throw error;
                        result(null, data[0]);
                      }
                    );
                    conn.release();
                  }
                );
              } else {
                conn.query(
                  `SELECT id,mail
                FROM user WHERE id = :id`,
                  { id },
                  (error, data) => {
                    if (error) throw error;
                    result(null, data[0], true);
                  }
                );
                conn.release();
              }
            }
          );
      }
    );
  });
};

// Get profil employer User (by id)
ProfilUserCompagny.getProfilCompagnyById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
     FROM contactProfil WHERE user_id = :id`,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data[0]);
        conn.release();
      }
    );
  });
};

// Update profil employer Compagny
ProfilUserCompagny.updateProfilCompagny = function (
  profilUserCompagnyObj,
  reqfile,
  result
) {
  const { name, town, address, zipCode, siren, siret, category, user_id } =
    profilUserCompagnyObj;

  let pathAvatar = "./public/images/avatar/",
    pathAvatarDb = "/api/assets/images/avatar/",
    pathAvatarWebp = "",
    pathImgWebp = "";

  const dateImg = new Date().getTime();

  if (reqfile) {
    pathImgWebp =
      pathAvatar +
      (reqfile.filename.split(".").slice(0, -1).join(".") + ".webp");

    pathAvatarWebp =
      pathAvatar + "avatar_user_" + user_id + "_" + dateImg + ".webp";

    func.renameFile(pathImgWebp, pathAvatarWebp).then((data) => {
      if (data) {
        const avatarImg =
          pathAvatarDb + "avatar_user_" + user_id + "_" + dateImg + ".webp";
        connection.getConnection(function (error, conn) {
          conn.query(
            `SELECT avatar
              FROM contactProfil WHERE user_id = :user_id`, 
            { user_id },
            (error, data) => {
              if (error) throw error;
              const nameAvatar = data[0].avatar.split("/")[5];
              const pathAvatarDbDel = pathAvatar + nameAvatar;
              if (data[0].avatar) func.removeFile(pathAvatarDbDel);
              conn.query(
                `
                  UPDATE contactProfil
                  SET name = :name,
                  address =:address,
                  town = :town,
                  zipCode = :zipCode,
                  avatar = :avatarImg,
                  siret = :siret,
                  siren = :siren,
                  category =:category
                  WHERE user_id = :user_id;
           `,
                {
                  name,
                  address,
                  town,
                  zipCode,
                  avatarImg,
                  siret,
                  siren,
                  category,
                  user_id,
                },
                (error, data) => {
                  if (error) throw error;
                  conn.query(
                    `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
                  FROM contactProfil WHERE user_id = :user_id`,
                    { user_id },
                    (error, data) => {
                      if (error) throw error;
                      result(null, data[0]);
                    }
                  );
                }
              );
            }
          );
          conn.release();
        });
      }
    });
  } else {
    connection.getConnection(function (error, conn) {
      conn.query(
        `
      UPDATE contactProfil
      SET name = :name,
      address =:address,
      town = :town,
      zipCode = :zipCode,
      siret = :siret,
      siren = :siren,
      category =:category
      WHERE user_id = :user_id;
    `,
        { name, address, town, zipCode, siret, siren, category, user_id },
        (error, data) => {
          if (error) throw error;
          conn.query(
            `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
         FROM contactProfil WHERE user_id = :user_id`,
            { user_id },
            (error, data) => {
              if (error) throw error;
              result(null, data[0]);
            }
          );
          conn.release();
        }
      );
    });
  }
};

// Creation profil employer Compagny
//  Plus utlisé dans l'application car profil crée par défaut au register
// Utiliser pour test postman
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
        conn.query(
          `SELECT user_id, name, address,town,zipCode,avatar,siret,siren,category
         FROM contactProfil WHERE user_id = :user_id`,
          { user_id },
          (error, data) => {
            if (error) throw error;
            result(null, data[0]);
          }
        );
        conn.release();
      }
    );
  });
};
module.exports = { ProfilUser, ProfilUserCompagny };
