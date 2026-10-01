const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

router.get('/api/reports', reportController.getAllReports);
router.get('/api/reports/:id', reportController.getReportById);
router.post('/api/reports', reportController.createReport);
router.put('/api/reports/:id', reportController.updateReport);
router.patch('/api/reports/:id', reportController.updateReport);
router.delete('/api/reports/:id', reportController.deleteReport);

router.get('/reports', reportController.renderReportList);
router.get('/reports/create', reportController.renderCreateReportForm);
router.post('/reports/create', reportController.createReportFromForm);
router.get('/reports/edit/:id', reportController.renderEditReportForm);
router.post('/reports/edit/:id', reportController.updateReportFromForm);
router.post('/reports/delete/:id', reportController.deleteReportFromForm);

module.exports = router;