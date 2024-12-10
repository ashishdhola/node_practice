const express= require("express")
const port= 8888;
const app= express()
const dbConnect= require("./config/config")

app.set("view engine","ejs")
app.use(express.urlencoded())

app.use("/books",require("./routes/bookRoutes"));

app.get("/",(req,res)=>{
    return res.render("index")
})

app.get('/addBook', async (req, res) => {
    return res.render('book');
})

app.post('/addBook', async (req, res) => {
    console.log(req.body);
    let addBook = await book.create(req.body);
    if (addBook) {
        console.log('Book Added!!!')
    } else {
        console.log('Something Went Wrong');
    }
    return res.redirect('/');
});

app.get('/deleteBook/:id', async (req, res) => {
    let deleteBook = await book.findById(req.params.id);

    if (deleteBook) {
        await book.findByIdAndDelete(req.params.id);
        console.log("deleted");
        return res.redirect('/')
    } else {
        console.log("something went wrong");
        return res.redirect('/')
    }
})

app.get('/updateBook/:id', async (req, res) => {
    let updateBook = await book.findById(req.params.id);

    if (updateBook) {
        return res.render('updateBook', { book: updateBook })
    } else {
        console.log("something went wrong");
        return res.redirect('/')
    }
})

app.post('/updateBook/:id', async (req, res) => {
    let updateBook = await book.findById(req.params.id);
    if (updateBook) {
        await book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log("Data is Updated");
        return res.redirect('/');
    } else {
        console.log('Something Went Wrong');
        return res.redirect('back');
    }
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server start at http://localhost:${port}`);
    }
})