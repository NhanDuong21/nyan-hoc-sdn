const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ['active', 'complete'],
            default: 'active'
        },

        completedAt: {
            type: Date,
            default: null
        },

        assignTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;