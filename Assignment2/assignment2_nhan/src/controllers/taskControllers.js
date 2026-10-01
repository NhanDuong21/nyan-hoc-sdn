const Task = require('../models/Task');
const User = require('../models/User');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('assignTo', 'name email');

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.find().populate('assignTo', 'name email');

    res.render('listTask', { tasks });
};

exports.createTasks = async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            assignTo: req.body.assignTo
        });

        await task.save();

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.createTaskForm = async (req, res) => {
    const users = await User.find();

    res.render('createTask', { users });
};

exports.updateTasks = async (req, res) => {
    try {
        const { title, status, completedAt, assignTo } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt,
                assignTo
            },
            {
                new: true
            }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: 'The task does not exist.'
            });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.deleteTasks = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({
                message: 'The task does not exist.'
            });
        }

        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};