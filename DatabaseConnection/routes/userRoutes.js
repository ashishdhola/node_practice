const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/', (req, res)=>{
    return res.end('User page');
})

module.exports = userRoutes;