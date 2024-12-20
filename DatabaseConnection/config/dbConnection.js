const mongoose = require('mongoose');

// Database connection
const dbConnect = () => {
    mongoose.connect("mongodb://localhost:27017/node3PM")
        .then(() => console.log('DB Connected!!'))
        .catch((err) => console.log(err));
}


module.exports = dbConnect();