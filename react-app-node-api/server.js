
const express = require("express");
const app = express();

const cors = require("cors");
const mongoose= require("mongoose");
const movieRouter = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/movie", movieRouter);

const connect = function(){
    return mongoose.connect("mongodb://localhost:27017/futurebridge");
}

const start = async()=>{
    try{
        await connect();
        app.listen(5000,()=>{
            console.log("App Listening on port 5000");
        })
    }
    catch(err){
        console.log(err);
    }
}

start();