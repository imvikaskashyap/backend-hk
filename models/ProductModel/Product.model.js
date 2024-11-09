const { DataTypes } = require('sequelize');
const { dbInstance } = require('../../config/db.config');

const Product = dbInstance.define('product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Product;
