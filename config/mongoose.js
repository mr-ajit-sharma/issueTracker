const mongoose = require('mongoose');
// const env=require('dotenv').config()
const url = process.env.MONGO_URL;

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


// // const mongoose =require('mongoose')
// // mongoose.connect(process.env.MONGO_URL)
// // const db= mongoose.connection
// // db.on('error',()=>{
// //     console.log("error in the database connection")
// // })
// // db.once('open',()=>{
// //     console.log("database connected with mongodb successfully")
// // })
// // module.exports=db;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// module.exports = connectDB;