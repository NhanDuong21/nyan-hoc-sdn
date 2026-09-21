const express = require('express')
const app = express();
// middlewares config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//get api
app.get('/', (req, res) => {
    res.status(200).send('You have 10 tasks');
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})