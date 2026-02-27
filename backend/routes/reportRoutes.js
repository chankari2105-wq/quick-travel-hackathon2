const express = require('express');
const router = express.Router();
const { addReport, getReports } = require('../controllers/reportController');

router.post('/', addReport);
router.get('/', getReports);

module.exports = router;