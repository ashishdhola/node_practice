const express = require("express")
const bookRoutes = express.Router()
const book = require("../model/bookModel")

bookRoutes.get("/", async (req, res) => {
    let getBooks = await book.find()
    return res.render("bookStore", { getBooks })
})

bookRoutes.post("/addBook", async (req, res) => {

    let addBooks = await book.create(req.body)
    if (addBooks) {
        console.log('New Book Added ');
        return res.redirect('/books');
    }
    else {
        console.log('Somthing Went Wrong');
        return res.redirect('/books');
    }
})

bookRoutes.get("/deleteBook/:id", async (req, res) => {
    let rec = await book.findById(req.params.id)
    if (rec) {
        await book.findByIdAndDelete(req.params.id)
        console.log("Book Deleted Success");
        return res.redirect("/books")
    }
    else {
        console.log("something Went Wrong");
        return res.redirect("/books")
    }
})

bookRoutes.get("/editBook/:id", async (req, res) => {
    let singleBook = await book.findById(req.params.id)
    if (singleBook) {
       return res.render("editBook", { singleBook })
    }
    else {
        console.log("something Went Wrong");
        return res.redirect("/books")
    }
})

bookRoutes.post("/editBook/:id", async (req, res) => {
    let rec = await book.findById(req.params.id)
    if (rec) {
        await book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log("Book detail edited Success");
        return res.redirect("/books")
    }
    else {
        console.log("something Went Wrong");
        return res.redirect("/books")
    }
})
module.exports = bookRoutes