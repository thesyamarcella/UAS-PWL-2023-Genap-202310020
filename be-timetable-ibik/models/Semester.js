// models/Semester.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Semester = sequelize.define('Semester', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Semester;
