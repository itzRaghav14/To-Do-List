// including express and router
const express = require('express');
const router = express.Router();

// including home controller
const homeController = require('../controllers/home_controller');

// get requests
router.get('/', homeController.home);

// post requests
router.post('/create-task', homeController.createTask);
router.post('/delete-task', homeController.deleteTask);

// exporting router
module.exports = router;