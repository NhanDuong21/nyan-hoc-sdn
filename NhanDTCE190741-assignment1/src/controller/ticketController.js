const Ticket = require('../models/ticketModel');

exports.getTicketsByUser = async (req, res) => {
    try {
        const tickets = await Ticket.find({
            userId: req.params.userId
        });

        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getAvailableTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({
            $or: [
                { userId: null },
                { userId: { $exists: false } },
                { userId: '' }
            ]
        });

        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
