const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },

        fullName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        phone: {
            type: String,
            required: true
        },

        age: {
            type: Number
        },

        gender: {
            type: String
        },

        isVIP: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;