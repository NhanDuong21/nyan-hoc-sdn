const Task = require('../models/Task');
// controllers/taskController.js
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createTasks = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTasks = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, {
            title,
            status,
            completedAt
        },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({
                message: "The task does not exist."
            });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTasks = async (req, res) => {
    try {
        const deleteTask = awaitTask.findByIdAndDelete(req.params.id); if (!deleteTask) { returnres.status(404).json({ message: "The task does not exist." }); }
        res.status(200).json(deleteTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};