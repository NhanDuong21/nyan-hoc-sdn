exports.getAllTasks = (req, res) => {
    res.status(200).send('You have 10 tasks');
};
exports.createTasks = (req, res) => {
    res.status(201).json({ message: 'Task added successfully!' })
};
exports.updateTasks = (req, res) => {
    res.status(204).json({ message: 'Task updated successfully!' })
};
exports.deleteTasks = (req, res) => {
    res.status(200).json({ message: 'Task delete successfully!' })
};