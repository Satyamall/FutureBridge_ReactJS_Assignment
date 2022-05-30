

const express = require("express");
const Movie = require("./model");
const router = express.Router();

router.post("/", async(req,res)=>{
         const movie = await Movie.insertMany(req.body);
         if(!movie) return res.status(400).json({message: "Movie Not Created"});
         res.status(201).json({payload: movie});
})

router.get("/", async(req,res)=>{
         const movies = await Movie.find({});
         if(!movies) return res.status(400).json({message: "No Movies Present"});
         return res.status(200).json({payload: movies});
})

module.exports = router;
