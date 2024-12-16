// MultipleFiles/routes/movieRoutes.js
const express = require('express');
const movieRoutes = express.Router();
const { moviePage, addNewMovie, deleteMovie, editMovie, updateMovie } = require('../controller/movieController');

movieRoutes.get('/', moviePage);
movieRoutes.post('/addMovie', addNewMovie);
movieRoutes.get('/deleteMovie/:id', deleteMovie);
movieRoutes.get('/editMovie/:id', editMovie);
movieRoutes.post('/updateMovie/:id', updateMovie);

module.exports = movieRoutes;