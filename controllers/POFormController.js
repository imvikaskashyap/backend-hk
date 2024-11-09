// Controllers/poFormController.js
const { Product, Option } = require('../models/product.model');
const POForm = require('../models/POForm.model');

// Admin: Create a new product with options
exports.createProduct = async (req, res) => {
    try {
        const { name, productCode, options } = req.body;
        
        const product = await Product.create({ name, productCode });
        
        // Create options related to the product
        const createdOptions = await Promise.all(
            options.map(opt => 
                Option.create({ ...opt, productId: product.id })
            )
        );
        
        res.status(201).json({ product, createdOptions });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product.' });
    }
};

// User: Submit a new PO form
exports.submitPOForm = async (req, res) => {
    try {
        const { productId, customerName, customerEmail, quantity, optionsSelected } = req.body;

        const poForm = await POForm.create({
            productId,
            customerName,
            customerEmail,
            quantity,
            optionsSelected,
        });

        res.status(201).json({ message: 'PO form submitted successfully.', poForm });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit PO form.' });
    }
};

// Get options for a product
exports.getProductOptions = async (req, res) => {
    try {
        const options = await Option.findAll({ where: { productId: req.params.productId } });
        res.status(200).json(options);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve product options.' });
    }
};
