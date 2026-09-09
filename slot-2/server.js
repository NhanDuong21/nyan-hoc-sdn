const express = require(`express`);
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    {
        id: 1, name: `Name1`
    },
    {
        id: 2, name: `Name2`
    }
];

app.get(`/users`, (req, res) => { res.status(200).json(users); })
app.get(`/users/:id`, (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400).send(`User not found!`)
    }
});

app.get(`/hello`, (req, res) => {
    res.json(`Hello World!`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})