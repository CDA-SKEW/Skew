// Import de Multer
const multer = require('multer')

// Ici nous définissons la config de stockage de multer
const storage = multer.diskStorage({
    //ici on indique le chemin de stockage

    destination: (req, file, cb) => {
        cb(null, './public/documents')
    },


    // Ici on stock le nom de l'image dans le filename
    filename: (req, file, cb) => {
        // console.log(file)
        // console.log("Multer (Nom de l'image): " + file.originalname)

        // ici la variable ext est le nom original de l'image
        const ext = file.originalname
        //File name prends la valeur de la variable ext
        cb(null, ext)
    },
})

// Ici seront initialiser les parametres de la config de multer
const uploadCv = multer({

    // Ici nous renseignons le stockage definit au dessus
    storage: storage,
    // Ici seront renseignés les limits des fichiers (taile, proportion, ...)
    limits: {
        // se limite à une taille de fichier en byte
        fileSize: 20 * 1024 * 1024, //ici limite la taille à 80048,576 Ko donc 8.048 Moctet
        //Se limite à 1 fichier
        files: 1
    },
    // Ici nous avons un filtre qui va nous permetre de configurer les extensions accepter par notre middleware ou autre
    fileFilter: (req, file, cb) => {

        // console.log("file.mimetype",file.mimetype)

        if (
            file.mimetype === "application/pdf"

        ) {
            cb(null, true)
        } else {
            cb(null, false)
        }

    }
})
module.exports = uploadCv