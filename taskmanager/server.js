const express = require('express')
const app = express();
// middlewares
app.use(express.json());
// Parse form-urlencoded (form HTML)
app.use(express.urlencoded({ extended: true }));
// routing path
app.get('/', (req, res) => {
    res.status(200).send('You have 10 tasks');
});
app.post('/api/tasks', (req, res) => {
    res.status(201).json({ message: 'Task added successfully!' })
});
app.put('/api/tasks/:id', (req, res) => {
    res.status(204).json({ message: 'Task updated successfully!' })
})
app.delete('/api/tasks/:id', (req, res) => {
    res.status(200).json({ message: 'Task delete successfully!' })
})
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})