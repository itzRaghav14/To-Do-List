// including express and router
const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controller');

router.get('/', userController.home);
router.get('/profile', userController.profile);

// exporting router
module.exports = router;
