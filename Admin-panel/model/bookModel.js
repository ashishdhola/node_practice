const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookName: {
        type: String
    },
    bookTitle: {
        type: String
    },
    authorName: {
        type: String,
    },
    publishDate: {
        type: String,
    },
    bookPrice: {
        type: Number
    },
    bookPages: {
        type: Number
    },
    bookImage: {
        type: String
    }

});

const book = mongoose.model('book', bookSchema);

module.exports = book;