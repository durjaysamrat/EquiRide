const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const password = encodeURIComponent("NNKUM/2DSD");

mongoose.connect(`mongodb+srv://durjaysamratn:${password}@project0.x8psfqs.mongodb.net/?retryWrites=true&w=majority&appName=project0`,{
})
.then(()=>{
    console.log("regconnected");
})
.catch(()=>{
    console.log("failed");
})


const app = express();

const registrationSchema = new mongoose.Schema({
    Name : String,
    Gender : String,
    Age : Number,
    Date2 : Date,
    time : String,
    C1 : String,
    email : String,
    phone : Number
});
    
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'pages'))); 

const Registration = mongoose.model("Registration", registrationSchema); 

module.exports=Registration

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});


