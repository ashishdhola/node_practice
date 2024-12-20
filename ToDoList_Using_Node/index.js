const express= require("express")
const port= 3000;
const app= express()




app.set("view engine", "ejs");
app.use(express.urlencoded());

let alltask=[
    {
        task:"Develop applications"
    },
    {
        task:"Optimize code"
    },
    {
        task:"debug code"
    },
    {
        task:"Develop To-do app"
    }
]
let completedtask=[
]

app.get("/",(req,res)=>{
    res.render("index",{alltask:alltask,completedtask:completedtask})
})

app.post("/addtask",(req,res)=>{
    let {task}= req.body
    let newtask= {
        task
    }
    alltask.push(newtask)
    res.redirect("/")
})

app.get("/delete/:id",(req,res)=>{
    // console.log(req.params.id);
    let index= req.params.id
    alltask= alltask.filter((val,i)=>{
        return i!=index
    })
    res.redirect("/")
})

app.get("/complete/:id",(req,res)=>{
    let index= req.params.id
    result = alltask.filter((val,i)=>{
        return i==index
    })
    alltask= alltask.filter((val,i)=>{
        return i!=index
    })
    completedtask.push(result[0])
    res.redirect("/")
})

// Create A Server (using port)
app.listen(port, (err)=>{
    if(err){
        console.log(`Server is not start: ${err}` );
        return false;
    }
    console.log(`Server start at http://localhost:${port}`);
});