const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        enum: ['available', 'borrowed'],
        default: 'available'
    },

    borrowedAt: {
        type: Date,
        default: null
    }
},
    {
        timestamps: true
    }
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;