const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lecturer = sequelize.define('Lecturer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Lecturer;
