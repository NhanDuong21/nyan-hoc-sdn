const express = require('express');
const ctrl = require('../controllers/userControllers');

const router = express.Router();

router.get('/', ctrl.getAllUsers);

router.post('/', ctrl.createUsers);

module.exports = router;