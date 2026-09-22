const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.patch(
    '/:id/vip',
    userController.updateVIP
);

router.delete(
    '/:id/tickets',
    userController.deleteUserTickets
);

module.exports = router;