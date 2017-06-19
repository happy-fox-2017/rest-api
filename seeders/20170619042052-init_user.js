'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name : "fajar",
        email : "fajar@gmail.com",
        password : "fajar",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name : "zuko",
        email : "zuko@gmail.com",
        password : "zuko",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
