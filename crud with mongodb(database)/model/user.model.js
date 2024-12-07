const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname: String,  
    lname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;