const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    cinema: {
        type: String,
        required: true
    },
    showTime: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        requierd: true
    },
    userId: {
        type: String,
        default: null
    }
},
    {
        timestamps: true
    }
);
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;