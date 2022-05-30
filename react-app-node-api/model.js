
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    id: {type: Number, required: false},
    name:{ type: String, required: true},
    rating: {type: Number, required: true},
    release_date: {type: String, required: true}
})

const Movie = mongoose.model("movies", movieSchema)

module.exports = Movie;