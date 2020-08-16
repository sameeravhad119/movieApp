let mongoose = require("mongoose");
let model = require("mongoose").model;

const movieSchema = new mongoose.Schema({
    popularity: { type: String, required: true },
    director: { type: String, required: true },
    genre: { type: [String], required: true },
    imdb_score: { type: Number, required: true },
    name: { type: String, required: true },
})

module.exports = model('movies', movieSchema);