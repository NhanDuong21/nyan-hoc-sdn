const express = require(`express`);
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    {
        id: 1, name: `Nyan`
    },
    {
        id: 2, name: `Dương Thiện Nhân`
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

app.post(`/users`, (req, res) => {
    const newUser = {
        id: req.body.id,
        name: req.body.name
    };
    res.status(201).json(newUser);
});

app.put(`/users/:id`, (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send(`User not found!`);
    }
})

app.delete(`/users/:id`, (req, res) => {
    const { id } = req.params;
    const user = users.findIndex((u) => u.id === parseInt(id));
    if (user !== -1) {
        users.splice(user, 1);
        res.send(`User deleted`);
    } else {
        res.status(404).send(`User not found`);
    }
});

app.get(`/hello`, (req, res) => {
    res.json(`Hello World!`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})