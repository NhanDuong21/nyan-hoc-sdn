const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt
            },
            {
                new: true
            }
        );
        if (!updatedTask) {
            return res.status(404).json({
                message: 'The task does not exits'
            });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(
            req.params.id
        );

        if (!deletedTask) {
            return res.status(404).json({
                message: 'The task does not exits.'
            });
        }
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};