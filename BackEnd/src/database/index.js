/**
 * 1. Create a connection function for mongoDB
 * 2. Start the cloud mongodb connection
*/

const mongoose = require("mongoose");
require("dotenv").config();

// Creating connection function
const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        // if (err) return err.message;
        console.log(err.message);
    }
};

module.exports = connectDB;