const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const ticketRoutes = require('./src/routes/ticketRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error(error);
    });

app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});