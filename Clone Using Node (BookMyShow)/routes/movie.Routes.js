const express = require("express")
// const path = require('path');
// const fs = require('fs');
const Movie = require('../model/movie.Model');
const movieRoutes = express.Router()
// const movieSchema = require("../model/movieModel");
const { moviePage, form, addMovie, deleteMovie, editMovie, updateMovie, singleMovie } = require("../controller/movie.Controller");

movieRoutes.get("/", moviePage)
movieRoutes.get("/form", form)
movieRoutes.post("/form/addMovie", Movie.uploadImage,addMovie )
movieRoutes.get('/delete/:id', deleteMovie);
movieRoutes.get("/edit/:id",editMovie);
movieRoutes.post("/updateMovie/:id", Movie.uploadImage, updateMovie)
movieRoutes.get("/singleMovie/:id",singleMovie)

module.exports = movieRoutes