const express = require('express');
const router = express.Router();

const { getAllThemes, getAllThemesStatic } = require('../controllers/themes');

router.route('/').get(getAllThemes);
router.route('/static').get(getAllThemesStatic);

module.exports = router;
