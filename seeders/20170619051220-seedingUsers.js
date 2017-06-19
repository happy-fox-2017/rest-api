'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
          name: 'Antoni Angga',
          password : '123456',
          bio : 'Antoni Angga About Us',
          gender : 'Male',
          createdAt : new Date(),
          updatedAt : new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
