// Assignment 2 - MongoDB connection
// Member code: nhandtce190741

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Connection successful');
    } catch (error) {
        console.error('Database connection failed:', error.message);

        process.exit(1);
    }
};

module.exports = connectDB;