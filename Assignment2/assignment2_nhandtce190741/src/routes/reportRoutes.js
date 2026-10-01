const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

router.get('/', reportController.getAllReports);

router.get('/:id', reportController.getReportById);

router.post('/', reportController.createReport);

router.put('/:id', reportController.updateReport);

router.patch('/:id', reportController.updateReport);

router.delete('/:id', reportController.deleteReport);

module.exports = router;