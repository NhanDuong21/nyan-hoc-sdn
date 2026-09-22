const express = require('express');
const router = express.Router();

const ticketController = require('../controller/ticketController');
router.get('/user/:userId', ticketController.getTicketsByUser);
router.get('/available', ticketController.getAvailableTickets);

module.exports = router;