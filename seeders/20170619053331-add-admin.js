'use strict';
var hash = require('object-hash')

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        username: 'admin',
        password: hash('admin'),
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      username: 'admin',
      password: hash('admin'),
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
