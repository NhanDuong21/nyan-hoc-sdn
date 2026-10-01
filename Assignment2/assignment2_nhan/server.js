const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const usersRoutes = require('./src/routes/userRoutes');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect database
connectDB();

app.get('/', (req, res) => {
    res.send('Assignment 2 is running');
});

app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});