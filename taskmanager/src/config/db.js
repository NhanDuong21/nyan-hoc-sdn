const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/taskmanager')
        console.log('Connection successful')
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // exit with error
    }
}
module.exports = connectDB;