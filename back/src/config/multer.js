// Import de Multer
const multer = require('multer')

// Ici nous définissons la config de stockage de multer
const storage = multer.diskStorage({

    filename: (req, file, cb) => {
        const ext = file.originalname
        cb(null, ext)
    },
})

// Ici seront initialiser les parametres de la config de multer
const upload = multer({

    storage: storage,
    limits: {
        fileSize: 20 * 1024 * 1024, //ici limite la taille à 80048,576 Ko donc 8.048 Moctet
        files: 1
    },
    // Ici nous avons un filtre qui va nous permetre de configurer les extensions accepter par notre middleware ou autre
    fileFilter: (req, file, cb) => {

        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/gif" ||
            file.mimetype === "image/webp" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/svg+xml" ||
            file.mimetype === "application/pdf"

        ) {
            cb(null, true)
        } else {
            cb(null, false)
        }

    }
})
module.exports = upload