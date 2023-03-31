// including express and router
const express = require('express');
const router = express.Router();

// including home controller
const homeController = require('../controllers/home_controller');

// get requests
router.get('/', homeController.home);

// passing it on to other file
router.use('/users', require('./users'));

// exporting router
module.exports = router;