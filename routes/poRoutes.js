const express = require('express');
const { createProduct, submitPOForm, getProductOptions } = require('../controllers/POFormController');
const router = express.Router();

// Admin Routes
router.post('/admin/products', createProduct);

// User Routes
router.post('/user/po-forms', submitPOForm);
router.get('/products/:productId/options', getProductOptions);

module.exports = router;
