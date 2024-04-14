const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Define routes
router.get('/cats', controller.getAllCats);
router.post('/cats', controller.createCat);

module.exports = router;

