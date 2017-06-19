'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var bcrypt = require('bcrypt')
    var saltRounds = 10
    var hash = bcrypt.hashSync('fajar', saltRounds)
    return queryInterface.bulkInsert('Users', [
      {
        name : "fajar",
        email : "fajar@gmail.com",
        password : hash,
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
