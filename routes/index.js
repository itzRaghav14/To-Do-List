// including express and router
const express = require('express');
const router = express.Router();

// including home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

// exporting router
module.exports = router;