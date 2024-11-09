const { DataTypes } = require('sequelize');
const { dbInstance } = require('../config/db.config');

const ProductOptionValue = dbInstance.define('productOptionValue', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  productOptionId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = ProductOptionValue;
