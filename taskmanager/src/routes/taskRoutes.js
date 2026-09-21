const express = require('express')
const ctrl = require(`../controller/taskController`)
const router = express.Router();
// routing path
router.get(`/`, ctrl.getAllTasks);
router.post(`/`, ctrl.createTasks);
router.put(`/:id`, ctrl.updateTasks);
router.delete(`/:id`, ctrl.deleteTasks);
module.exports = router;