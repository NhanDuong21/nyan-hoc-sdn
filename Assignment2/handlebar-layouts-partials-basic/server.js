const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

// Configure Handlebars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views/layouts'),
        partialsDir: path.join(__dirname, 'views/partials')
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.get('/', (req, res) => {
    res.render('pages/home');
});

// About
app.get('/about', (req, res) => {
    res.render('pages/about', {
        userName: 'John Doe'
    });
});

// Contact
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

// Product
app.get('/product', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'Phone', price: 20000 },
        { id: 3, name: 'Tablet', price: 30000 },
    ];

    res.render('pages/product', { products });
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});