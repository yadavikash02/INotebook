const mongoose =require("mongoose");
const connection=()=>{
    const MONGODB_URI='mongodb://127.0.0.1:27017/InotebookDB';
    mongoose.connect(MONGODB_URI ,{useNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log("connect");
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("disconnect");
    })
    mongoose.connection.on('error',()=>{
        console.log("error");
    })
}
module.exports= connection