const express= require("express")
const path = require('path');
const port=2003;
const app= express()
const db= require("./config/MongodbConnect")

app.use(express.urlencoded())
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))
app.set("view engine" , "ejs")

app.get("/",(req,res)=>{
   return res.render("index")
})

app.use("/movie",require("./routes/movie.Routes"));

app.listen(port,(err)=>{
    console.log(`started at port http://localhost:${port}`);
})