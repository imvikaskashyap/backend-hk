const express = require('express');
const { register, login, getAllEmployees } = require('../controllers/Employee.controller');
const { submitPOForm, getProductOptions } = require('../controllers/POFormController');
const empRouter = express.Router();

// Register route
empRouter.post('/register', register);

// Login route
empRouter.post('/login', login);

empRouter.get('/all-employees', getAllEmployees);

empRouter.post('/po-form', submitPOForm); // Submit PO Form
empRouter.get('/products/:productId/options', getProductOptions);

module.exports = empRouter;
