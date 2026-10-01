const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

// Configure Handlebars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: false
    })
);

app.set('view engine', 'hbs');
app.set('views', './views');

// Home page
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello, World!' });
});

// Products page
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'Phone', price: 20000 },
        { id: 3, name: 'Tablet', price: 30000 },
    ];
    res.render('products', { products });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(
        `Server is running on http://localhost:${PORT}`
    );
});