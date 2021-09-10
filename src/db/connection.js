const mongoose = require("mongoose");
require("dotenv").config();


const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("Connected to database.")

    }catch(error){
        console.log(error)
    };
};




connection();