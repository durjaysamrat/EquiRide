const express=require("express");
const app=express()
const path=require("path")
const bodyParser = require("body-parser");
const tempelatePath=path.join(__dirname,'/tempelates')
const password = encodeURIComponent("NNKUM/2DSD");
const mongoose = require("mongoose")
var database
const { MongoClient } = require('mongodb');

const MONGODB_URI = `mongodb+srv://durjaysamratn:${password}@project0.x8psfqs.mongodb.net/?retryWrites=true&w=majority&appName=project0`;
const client = new MongoClient(MONGODB_URI);
console.log("connection done");

const db = client.db('test');
var collection = db.collection('collection1');
var result;
async function fetchData() {
    try {
        result = await collection.find({}).toArray();
        console.log('Fetched data:', result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }}
    app.use(express.json())

var database
express.Router.get('/',(req,res)=>{
    collection = db.collection('collection1');
    fetchData();
    res.render('adminpage',{result});
    console.log()
})

module.exports=result
