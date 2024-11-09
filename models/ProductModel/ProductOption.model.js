const { DataTypes } = require('sequelize');
const { dbInstance } = require('../config/db.config');

const ProductOption = dbInstance.define('productOption', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('dropdown', 'text', 'number'),
    defaultValue: 'dropdown'
  }
});

module.exports = ProductOption;
