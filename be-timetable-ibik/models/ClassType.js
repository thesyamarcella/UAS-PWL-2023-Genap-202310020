// models/ClassType.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ClassType = sequelize.define('ClassType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ClassType;
