'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users','role',Sequelize.STRING);
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Users','role');
  }
};
