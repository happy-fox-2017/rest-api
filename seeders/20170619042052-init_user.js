'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name : "fajar",
        email : "fajar@gmail.com",
        password : "fajar",
        role : "admin"
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
