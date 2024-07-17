const mongoose = require('mongoose');
const dotenv = require('dotenv');
const asyncHandler = require('express-async-handler');

const dbconnection = asyncHandler(async() => {
    const DB_object = await mongoose.connect(process.env.MONGO_URL)

    if(DB_object){
        console.log('connected to mongoDB')
    }
    else{
        console.log('Error connection to mongoDB')
    }
})

module.exports = dbconnection;