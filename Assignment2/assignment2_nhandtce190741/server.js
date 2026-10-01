const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const connectDB = require('./src/config/db');

const userRoutes = require('./src/routes/userRoutes');
const reportRoutes = require('./src/routes/reportRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

connectDB();

app.use('/', userRoutes);
app.use('/', reportRoutes);

app.get('/', (req, res) => { res.redirect('/reports'); });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});