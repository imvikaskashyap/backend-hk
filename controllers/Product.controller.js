// Controllers/ProductController.js
const { Product, Option } = require('../models/product.model');

// Admin: Create a new product with options
exports.createProductWithOptions = async (req, res) => {
    const { name, productCode, options } = req.body;
    try {
        const product = await Product.create({ name, productCode });

        // Create related options for the product
        const optionPromises = options.map(option =>
            Option.create({ productId: product.id, name: option.name, values: option.values })
        );
        await Promise.all(optionPromises);

        res.status(201).json({ message: 'Product and options created successfully!', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create product.' });
    }
};


exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve products.' });
    }
};

// Get options for a specific product
exports.getProductOptions = async (req, res) => {
    try {
        const options = await Option.findAll({ where: { productId: req.params.productId } });
        res.status(200).json(options);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve product options.' });
    }
};
