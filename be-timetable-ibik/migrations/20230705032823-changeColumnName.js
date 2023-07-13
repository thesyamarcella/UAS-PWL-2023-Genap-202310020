'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Schedules', 'title', 'eventTitle');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Schedules', 'eventTitle', 'title');
  },
};
