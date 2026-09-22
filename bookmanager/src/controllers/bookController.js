const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateBook = async (req, res) => {
    try {
        const { title, status, borrowedAt  } = req.body;

        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                borrowedAt
            },
            {
                new: true
            }
        );
        if (!updateBook) {
            return res.status(404).json({
                message: 'The book does not exits'
            });
        }
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(
            req.params.id
        );

        if (!deletedBook) {
            return res.status(404).json({
                message: 'The Book does not exits.'
            });
        }
        res.status(200).json(deletedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};