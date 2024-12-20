const mongoose= require("mongoose")
const dbConnect=()=>{
    mongoose.connect("mongodb://localhost:27017/BmsNode")
    .then(()=>{
        console.log("db Connected");
    }).catch((err)=>{
        console.log("db not connected");
    })
}
module.exports=dbConnect()