'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name : DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        isEmail : true
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [6,255],
          msg : "password must more than 6 characters"
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : 'user'
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
