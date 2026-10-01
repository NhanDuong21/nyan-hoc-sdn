// Assignment 2 - User routes
// Member code: nhandtce190741

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.post('/api/users', userController.createUser);
router.put('/api/users/:id', userController.updateUser);
router.patch('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

router.get('/users', userController.renderUserList);
router.get('/users/create', userController.renderCreateUserForm);
router.post('/users/create', userController.createUserFromForm);
router.get('/users/edit/:id', userController.renderEditUserForm);
router.post('/users/edit/:id', userController.updateUserFromForm);
router.post('/users/delete/:id', userController.deleteUserFromForm);

module.exports = router;