// Assignment 2 - Report controller
// Member code: nhandtce190741

const Report = require('../models/Report');
const User = require('../models/User');
exports.getAllReports = async (req, res) => {
    try {
        const filter = {};

        if (req.query.status) {
            filter.status = req.query.status;
        }

        if (req.query.severity) {
            filter.severity = req.query.severity;
        }

        if (req.query.project) {
            filter.project = req.query.project;
        }

        const reports = await Report.find(filter).populate('assignedTo', 'name email');

        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id).populate('assignedTo', 'name email');

        if (!report) {
            return res.status(404).json({
                message: 'Report not found'
            });
        }

        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.createReport = async (req, res) => {
    try {
        const report = new Report({
            title: req.body.title,
            description: req.body.description,
            severity: req.body.severity,
            status: req.body.status,
            project: req.body.project,
            assignedTo: req.body.assignedTo
        });

        await report.save();

        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.updateReport = async (req, res) => {
    try {
        const updatedReport = await Report.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                severity: req.body.severity,
                status: req.body.status,
                project: req.body.project,
                assignedTo: req.body.assignedTo
            },
            {
                new: true,
                runValidators: true
            }
        ).populate('assignedTo', 'name email');

        if (!updatedReport) {
            return res.status(404).json({
                message: 'Report not found'
            });
        }

        res.status(200).json(updatedReport);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.deleteReport = async (req, res) => {
    try {
        const deletedReport = await Report.findByIdAndDelete(req.params.id);

        if (!deletedReport) {
            return res.status(404).json({
                message: 'Report not found'
            });
        }

        res.status(200).json({
            message: 'Report deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.renderReportList = async (req, res) => {
    try {
        const filter = {};

        if (req.query.project) {
            filter.project = req.query.project;
        }

        if (req.query.status) {
            filter.status = req.query.status;
        }

        if (req.query.severity) {
            filter.severity = req.query.severity;
        }

        const reports = await Report.find(filter).populate('assignedTo', 'name email');

        res.render('pages/reports/list', {
            reports,
            filters: {
                project: req.query.project || '',
                status: req.query.status || '',
                severity: req.query.severity || ''
            }
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.renderCreateReportForm = async (req, res) => {
    try {

        const users = await User.find();

        res.render('pages/reports/create', { users });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.createReportFromForm = async (req, res) => {
    try {
        await Report.create({
            title: req.body.title,
            description: req.body.description,
            severity: req.body.severity,
            status: req.body.status,
            project: req.body.project,
            assignedTo: req.body.assignedTo
        });

        res.redirect('/reports');
    } catch (error) {
        res.status(400).send(error.message);
    }
};


exports.renderEditReportForm = async (req, res) => {
    try {

        const report = await Report.findById(req.params.id);
        const users = await User.find();

        if (!report) {
            return res.status(404).send('Report not found');
        }

        res.render('pages/reports/edit', { report, users });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.updateReportFromForm = async (req, res) => {
    try {
        const updatedReport = await Report.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                severity: req.body.severity,
                status: req.body.status,
                project: req.body.project,
                assignedTo: req.body.assignedTo
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedReport) {
            return res.status(404).send('Report not found');
        }

        res.redirect('/reports');
    } catch (error) {
        res.status(400).send(error.message);
    }
};


exports.deleteReportFromForm = async (req, res) => {
    try {
        const deletedReport = await Report.findByIdAndDelete(req.params.id);

        if (!deletedReport) {
            return res.status(404).send('Report not found');
        }

        res.redirect('/reports');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
