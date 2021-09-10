const Movie = require("./movie.model")
const mongoose = require("mongoose")


exports.listMovie = async () =>{
    try{
        const movieList = await Movie.find();
        console.log(movieList);

 }catch(error){
     console.log(error)
 }
 };
 exports.findMovie = async (movieName) =>{
    try{
        const movie = await Movie.find({name: movieName})
        console.log(movie)
 }catch(error){
     console.log(error)
 }
 };
 
exports.addMovie = async (newMovie) =>{
   try{
       const movie = new Movie(newMovie);
       await movie.save();
    console.log("Entery saved successfully")
}catch(error){
    console.log(error)
}
};
exports.updateMovie = async (movieName, watched ) =>{
    try{
        await Movie.updateOne({name:movieName},{$set:{watchedOrNot:watched}});
        console.log("Update Successful")
 }catch(error){
     console.log(error)
 };
 };
 exports.deleteMovie = async (movieName) =>{
    try{
        await Movie.deleteOne({name:movieName});
        console.log("Movie deleted successfully")
 }catch(error){
     console.log(error)
 };
 };