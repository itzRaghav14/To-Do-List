// including express and router
const express = require('express');
const router = express.Router();

// including home controller
const homeController = require('../controllers/home_controller');

// get requests
router.get('/', homeController.home);
router.post('/create-task', homeController.createTask);

// exporting router
module.exports = router;