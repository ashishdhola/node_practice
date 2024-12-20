const express = require("express")

const Movie = require('../model/movie.Model');
const movieRoutes = express.Router()
const { moviePage, form, addMovie, deleteMovie, editMovie, updateMovie, singleMovie } = require("../controller/movie.Controller");

movieRoutes.get("/", moviePage)
movieRoutes.get("/form", form)
movieRoutes.post("/form/addmovie", Movie.uploadImage,addMovie )
movieRoutes.get('/delete/:id', deleteMovie);
movieRoutes.get("/edit/:id",editMovie);
movieRoutes.post("/updateMovie/:id", Movie.uploadImage, updateMovie)
movieRoutes.get("/singleMovie/:id",singleMovie)

module.exports = movieRoutes