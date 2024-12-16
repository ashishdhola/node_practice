// MultipleFiles/controller/movieController.js
const Movie = require('../model/movie.model');

exports.moviePage = async (req, res) => {
    let movies = await Movie.find();
    return res.render('movie', { movies });
};

exports.addNewMovie = async (req, res) => {
    let newMovie = await Movie.create(req.body);
    if (newMovie) {
        console.log('New Movie Added!!!!');
        return res.redirect('/movie');
    } else {
        console.log('Something Wrong...');
        return res.redirect('/movie');
    }
};

exports.deleteMovie = async (req, res) => {
    let rec = await Movie.findById(req.params.id);
    if (rec) {
        await Movie.findByIdAndDelete(req.params.id);
        console.log('Delete Record Success');
        return res.redirect('/movie');
    } else {
        console.log("Something wrong");
        return res.redirect("/movie");
    }
};

exports.editMovie = async (req, res) => {
    let rec = await Movie.findById(req.params.id);
    if (rec) {
        return res.render('editMovie', { movie: rec });
    } else {
        console.log("Something wrong");
        return res.redirect("/movie");
    }
};

exports.updateMovie = async (req, res) => {
    let rec = await Movie.findById(req.params.id);
    if (rec) {
        await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('Update Record Success');
        return res.redirect('/movie');
    } else {
        console.log('Something Wrong');
        return res.redirect('back');
    }
};