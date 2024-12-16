// MultipleFiles/model/movie.model.js
const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String
    },
    description: {
        type: String
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;