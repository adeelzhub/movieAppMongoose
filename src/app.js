require("./db/connection");
const mongoose = require("mongoose");
const { listMovie,findMovie, addMovie, updateMovie, deleteMovie} = require("./movies/movie.methods")
const command = process.argv[2];
const app = async () => {
    if(command === "list"){
        await listMovie();

    }else if(command === "find"){
        await findMovie(process.argv[3]);

    }else if(command === "add"){
        const newMovie = {
            name: process.argv[3],
            actor: process.argv[4],
            watchedOrNot: process.argv[5]
        }
        await addMovie(newMovie);

    }else if(command === "update"){
        await updateMovie(process.argv[3], process.argv[4]);

    }else if(command === "delete"){
        await deleteMovie(process.argv[3]);

    }else{
        console.log("Invalid Command-See README file for valid commands")
    }
    mongoose.disconnect();
}

app();
