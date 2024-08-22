require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URI;


const conDb = async () =>{
    await mongoose.connect(url);
};

module.exports = conDb;