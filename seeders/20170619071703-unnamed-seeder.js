'use strict';
const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
function hashNih(pass) {
  var hash = bcrypt.hashSync(pass, salt);
  return hash
}
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});7
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'andrew',
      password: hashNih('1234'),
      createdAt: new Date,
      updatedAt: new Date
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
