//Important npm
const fs = require("fs");

module.exports = {
  // Fonction pour effacer un fichier via son path
  removeFile: function (file) {
    fs.unlink(file, (err) => {
      if (err) console.log("callback fs error ", err);
      else {
        return file;
      }
    });
  },
  // Fonction pour remplacer un fichier par un autre fichier via leur path
  renameFile: function (file1, file2) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
          fs.rename(file1, file2, (err) => {
            if (err) console.log("callback fs error ", err)
            resolve(true)
          })
          }, 200); //delay is in milliseconds
    })
  }
};
