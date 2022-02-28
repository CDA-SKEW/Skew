const sharp = require('sharp'),
    func = require('../utils/function')

const pathSharp = "public/images/avatar/"

module.exports = (req, res, next) => {

    if (req.file ) {
        const file = req.file
        // console.log(file.path)
        // console.log(file.filename)
        sharp(file.path)
            .resize({
                //ratio
                fit: sharp.fit.contain,
                position: "centre"
            })
            .webp({
                quality: 90
            })
            .toFile(pathSharp + file.filename.split('.').slice(0, -1).join('.') + ".webp", (err, info) => {
                let index =req.file.mimetype.indexOf("image");
                if (index !== -1) {
                    // console.log("je suis une image")
                    func.removeFile(pathSharp + file.filename)
                }
            })
        next()

    } else next()


}