const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb://localhost:27017/bookstore")
        .then(() => {
            console.log("Database is connected");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = dbConnect();