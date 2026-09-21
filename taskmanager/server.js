const express = require('express');
const tasksRoutes = require('./src/routes/taskRoutes');
const connectDB = require('./src/config/db')
// Connect to the Database
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', tasksRoutes);

const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })