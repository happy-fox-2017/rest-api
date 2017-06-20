'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn(
        'users',
        'userName',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'users',
        'password',
        Sequelize.STRING
      )]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn(
        'users',
        'userName',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'users',
        'password',
        Sequelize.STRING
      )]
  }
};
