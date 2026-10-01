const express = require('express');
const ctrl = require('../controllers/taskControllers');

const router = express.Router();

// API
router.get('/', ctrl.getAllTasks);
router.post('/', ctrl.createTasks);
router.put('/:id', ctrl.updateTasks);
router.delete('/:id', ctrl.deleteTasks);

// EJS
router.get('/list', ctrl.getTasks);
router.get('/create', ctrl.createTaskForm);

module.exports = router;