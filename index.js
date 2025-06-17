const express=require("express")
const app=express()
const path=require("path")
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const collection=require("./models/mongo")
const Registration=require("./routes/reg")
const password = encodeURIComponent("NNKUM/2DSD");
const MONGODB_URI = `mongodb+srv://durjaysamratn:${password}@project0.x8psfqs.mongodb.net/?retryWrites=true&w=majority&appName=project0`;
const client = new MongoClient(MONGODB_URI);
const db = client.db('test');
const tempelatePath=path.join(__dirname,'/tempelates')
const ejs=require("ejs")

app.use(express.json())
app.set('view engine','ejs');
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: 'codeforgeek',
    saveUninitialized: true,
    resave: true
}));
 
app.use(flash());
 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/home.html");
});

app.use(express.static(path.join(__dirname, 'pages'))); 

app.get("/login",(req,res)=>{
    const data = {
        title: "Login",
        layout: "layout/main-layout",
        message: req.flash("message"),
      };
      res.render("login", data);
})


app.get("/signup",(req,res)=>{
    const data = {
        title: "Sign Up",
        layout: "layout/main-layout",
        message: req.flash("message"),
      };
      res.render("signup", data);})

var email2;

app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    const check=await collection.findOne({email:req.body.email})
    try{
    if(check==null)
        {
            email2=req.body.email;
            await collection.insertMany([data])
            res.render("booking")        }
    else{
        req.flash("message",["error","error!","email already exists please login"]);
       res.redirect("/signup");
    }}
    catch{
        req.flash("message",["error","error!","something happened"]);
        res.redirect("/signup");

    }
})

app.post("/login",async (req,res)=>{
   if(req.body.email=='admin@g.c'&&req.body.password=='admin')
    {
        var coll = db.collection('registrations');
        result = await coll.find({}).toArray();
        res.render("adminpage",{result});
    }
    else{
  try{
    const check=await collection.findOne({email:req.body.email})
    if(check.password==req.body.password){
        email2=req.body.email
        res.render("booking")
    }
    else{
        req.flash("message",["error","error!","wrong password"]);
        res.redirect("/login");

    }
  }
  catch{
    req.flash("message",["error","error!","email doesnt exist pls sign up"]);
    res.redirect("/signup");
}}
})

app.post("/register", async (req, res) => {
    try {
        const { Name, Gender, Age, Date2, time, C1, phone } = req.body; 

        const registrationData = new Registration({
            Name, 
            Gender,
            Age,
            Date2, 
            time,
            C1,
            email:email2,
            phone
        });

        await registrationData.save();
        res.redirect("/success");
    } catch (error) {
        console.log(error);
        res.redirect("/error");
    }
});

app.get("/success", async (req, res) => {
    var coll = db.collection('registrations');
    result = await coll.find({email:email2}).toArray();
    res.render("book",{result})});

app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html");
});

app.listen(3000,()=>{
    console.log("port connected");
})