//Important npm
const fs = require("fs");

module.exports = {
  // Fonction pour effacer un fichier via son path
  removeFile: function (file) {
    fs.unlink(file, function (err) {
      if (err) console.log("callback fs error ", err);
      else {
        return file;
      }
    });
  },
  // Fonction pour remplacer un fichier par un autre fichier via leur path
  renameFile: function (file1, file2) {
    fs.rename(file1, file2, (err) => {
      if (err) console.log("callback fs error ", err);
      else {
        return file1, file2;
      }
    });
  }
};
