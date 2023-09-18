const mongoose = require('mongoose');
const env=require('dotenv').config()
const url = process.env.URL;

mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"),{
    TimeRanges:8000
});   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db

