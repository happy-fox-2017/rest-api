'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: "sidik",
      password: "123Uhuy",
      email: "sidik@uhuy.com",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "diksi",
      password: "123Uhuy",
      email: "diksi@uhuy.com",
      role: "users",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "dikhi",
      password: "123Uhuy",
      email: "dikhi@uhuy.com",
      role: "users",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "dayat",
      password: "123Uhuy",
      email: "dayat@uhuy.com",
      role: "users",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "sidki",
      password: "123Uhuy",
      email: "sidki@uhuy.com",
      role: "users",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "seamag",
      password: "123Uhuy",
      email: "seamag@uhuy.com",
      role: "users",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
