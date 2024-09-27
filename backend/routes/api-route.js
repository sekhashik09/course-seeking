// routes/api-route.js
const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/api-controller');

router.post('/login', ApiController.Login);
router.post('/signup', ApiController.signUp);

module.exports = router;
