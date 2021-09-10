const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const movieSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    actor:{
        type: String,
    },
    watchedOrNot:{
        type: String,
        required: true

    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;