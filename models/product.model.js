// Models/Product.model.js
const { DataTypes } = require('sequelize');
const { dbInstance } = require('../config/db.config');

const Product = dbInstance.define('product', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    productCode: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Option = dbInstance.define('option', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    productId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'products', key: 'id' } },
    name: { type: DataTypes.STRING, allowNull: false },
    values: { type: DataTypes.JSON, allowNull: false }, // e.g., ["610mm", "750mm"]
});

module.exports = { Product, Option };
