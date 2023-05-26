const express =require("express");
const connection=require("./db.js");
const cors = require('cors');
const { body, validationResult } = require('express-validator'); 
// import auth from
// const mongoose = require('mongoose');
// import mongoose from "mongoose";
// const connectToMongo=require('./db')
const app = express();  
app.use(cors());
app.use(express.json());
connection();
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))
app.listen(8000, ()=>{
    console.log("server is running at port 8000");
})
