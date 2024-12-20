const mongoose = require("mongoose")

const multer = require('multer');
const path = require('path');

const movieSchema = mongoose.Schema({
    Moviename: {
        type: String
    },
    actor: {
        type: String,
    },
    releaseYear: {
        type: Number,
    },
    movietype: {
        type: String,
    },
    movieImage: {
        type: String,
    },
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "uploads/movies"))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

movieSchema.statics.uploadImage = multer({ storage }).single('movieImage');
const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie