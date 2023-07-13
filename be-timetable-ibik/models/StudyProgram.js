// models/StudyProgram.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StudyProgram = sequelize.define('StudyProgram', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = StudyProgram;
