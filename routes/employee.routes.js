const express = require('express');
const { register, login, getAllEmployees } = require('../controllers/employee.controller');
const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

router.get('/all-employees', getAllEmployees);

module.exports = router;
