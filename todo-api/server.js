const express = require(`express`);
const app = express;

app.use 

app.get(`/hello`, (req, res) => {
    res.json(`Hello World!`)
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})