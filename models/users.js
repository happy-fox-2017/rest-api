'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};