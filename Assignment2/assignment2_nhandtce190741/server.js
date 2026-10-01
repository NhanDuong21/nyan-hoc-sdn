const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const connectDB = require('./src/config/db');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

connectDB();

app.get('/', (req, res) => {
    res.send('Bug Report Management Application');
}); 

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});