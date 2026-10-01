// Assignment 2 - Report routes
// Member code: nhandtce190741

const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

//rest api
router.get('/api/reports', reportController.getAllReports);
router.get('/api/reports/:id', reportController.getReportById);
router.post('/api/reports', reportController.createReport);
router.put('/api/reports/:id', reportController.updateReport);
router.patch('/api/reports/:id', reportController.updateReport);
router.delete('/api/reports/:id', reportController.deleteReport);

//render
router.get('/reports', reportController.renderReportList);

module.exports = router;