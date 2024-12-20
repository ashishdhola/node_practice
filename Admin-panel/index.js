const express= require("express")
const port= 8888;
const app= express()
const dbConnect= require("./config/config")


app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));

app.get("/",(req,res)=>{
    return res.render("index")
})

app.get('/addBook', async (req, res) => {
    return res.render('book');
})


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server start at http://localhost:${port}`);
    }
})