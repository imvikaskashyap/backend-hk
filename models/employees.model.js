const { DataTypes } = require('sequelize');
const { dbInstance } = require('../config/db.config');

const Employee = dbInstance.define('employee', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin','employee1', 'employee2', ),
        defaultValue: 'employee1',
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mob: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    profile_pic: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true
});

module.exports = { Employee };
