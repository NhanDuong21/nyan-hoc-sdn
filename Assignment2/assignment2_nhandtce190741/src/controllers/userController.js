// Assignment 2 - User controller
// Member code: nhandtce190741

const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.renderUserList = async (req, res) => {
    try {
        const users = await User.find();

        res.render('pages/users/list', { users });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.renderCreateUserForm = (req, res) => {
    res.render('pages/users/create');
};


exports.createUserFromForm = async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email
        });

        res.redirect('/users');
    } catch (error) {
        res.status(400).send(error.message);
    }
};


exports.renderEditUserForm = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('pages/users/edit', { user });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.updateUserFromForm = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).send('User not found');
        }

        res.redirect('/users');
    } catch (error) {
        res.status(400).send(error.message);
    }
};


exports.deleteUserFromForm = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).send('User not found');
        }

        res.redirect('/users');
    } catch (error) {
        res.status(500).send(error.message);
    }
}; 