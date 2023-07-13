'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Schedules', 'start', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.changeColumn('Schedules', 'end', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Schedules', 'start', {
      type: Sequelize.TIME,
      allowNull: false,
    });

    await queryInterface.changeColumn('Schedules', 'end', {
      type: Sequelize.TIME,
      allowNull: false,
    });
  },
};
