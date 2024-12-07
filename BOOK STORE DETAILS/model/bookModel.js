const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    language: String,
    year: Number,
    pages: Number,
    country: String,
    link: String
})

module.exports = mongoose.model('book', bookSchema);