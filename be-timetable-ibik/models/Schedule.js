
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Semester = require('./Semester');
const Room = require('./Room');
const Lecturer = require('./Lecturer');
const ClassType = require('./ClassType');
const StudyProgram = require('./StudyProgram');

const Schedule = sequelize.define('Schedule', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isHoliday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  lecturerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  semesterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  classTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  studyProgramId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Schedule.belongsTo(Lecturer, {
  foreignKey: 'lecturerId',
});
Lecturer.hasMany(Schedule, {
  foreignKey: 'lecturerId',
  sourceKey: 'id',
});
Schedule.belongsTo(Semester, {
  foreignKey: 'semesterId',
});
Semester.hasMany(Schedule, {
  foreignKey: 'semesterId',
  sourceKey: 'id',
});
Schedule.belongsTo(ClassType, {
  foreignKey: 'classTypeId',
});
ClassType.hasMany(Schedule, {
  foreignKey: 'classTypeId',
  sourceKey: 'id',
});
Schedule.belongsTo(Room, {
  foreignKey: 'roomId',
});
Room.hasMany(Schedule, {
  foreignKey: 'roomId',
  sourceKey: 'id',
});
Schedule.belongsTo(StudyProgram, {
  foreignKey: 'studyProgramId',
});
StudyProgram.hasMany(Schedule, {
  foreignKey: 'studyProgramId',
  sourceKey: 'id',
});

sequelize.sync();

module.exports = Schedule;

