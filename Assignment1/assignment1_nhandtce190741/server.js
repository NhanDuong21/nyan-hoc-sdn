const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./src/config/db');
const reportRoutes = require('./src/routes/reportRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Connection successful`);
});
