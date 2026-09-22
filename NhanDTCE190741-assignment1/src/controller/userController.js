const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

exports.updateVIP = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                isVIP: req.body.isVIP
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: 'User does not exist.'
            });
        }

        res.status(200).json({
            message: 'User VIP status updated',
            user
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.deleteUserTickets = async (req, res) => {
    try {
        const result = await Ticket.deleteMany({
            userId: req.params.id
        });
        res.status(200).json({
            message: 'All tickets for user deleted',
            deletedTickets: result.deletedCount
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}