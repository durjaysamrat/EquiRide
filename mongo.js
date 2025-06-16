const mongoose = require("mongoose")
const password = encodeURIComponent("NNKUM/2DSD");

mongoose.connect(`mongodb+srv://durjaysamratn:${password}@project0.x8psfqs.mongodb.net/?retryWrites=true&w=majority&appName=project0`,{
})
.then(()=>{
    console.log("mongoconnected");
})
.catch(()=>{
    console.log("failed");
})

const loginSchema=new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("collection1",loginSchema)

module.exports=collection
