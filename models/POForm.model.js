const { DataTypes } = require('sequelize');
const { dbInstance } = require('../config/db.config');
const { Product } = require('./product.model');

const POForm = dbInstance.define('po_form', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    productId: { 
        type: DataTypes.INTEGER.UNSIGNED, 
        allowNull: false,
        references: { model: Product, key: 'id' } 
    },
    customerName: { type: DataTypes.STRING, allowNull: false },
    customerEmail: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    optionsSelected: { type: DataTypes.JSON, allowNull: false }, 
    status: { type: DataTypes.STRING, defaultValue: "Pending" }, 
});

module.exports = POForm;
