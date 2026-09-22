const express = require('express');
const taskRoutes = require('./src/routes/taskRoutes');
const connectDB = require('./src/config/db');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send('Hello SDN302');
});

app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});