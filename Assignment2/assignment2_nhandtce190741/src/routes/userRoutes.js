const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.post('/api/users', userController.createUser);
router.put('/api/users/:id', userController.updateUser);
router.patch('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;