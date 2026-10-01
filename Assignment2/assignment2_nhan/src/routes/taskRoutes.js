const express = require('express');
const ctrl = require('../controllers/taskControllers');

const router = express.Router();

router.get('/', ctrl.getAllTasks);

router.post('/', ctrl.createTasks);

router.put('/:id', ctrl.updateTasks);

router.delete('/:id', ctrl.deleteTasks);

module.exports = router;