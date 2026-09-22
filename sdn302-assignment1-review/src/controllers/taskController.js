exports.getAllTasks = (req, res) => {
    res.status(200).json({
        message: 'Get all tasks'
    });
};

exports.createTask = (req, res) => {
    const title = req.body.title;
    const status = req.body.status;

    res.status(201).json({
        message: `Task created`,
        title: title,
        status: status
    });
};

exports.updateTask = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;

    res.status(200).json({
        message: `Update task ${id}`,
        id: id,
        title: title
    });
};

exports.deleteTask = (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        message: `Delete task ${id}`
    });
};