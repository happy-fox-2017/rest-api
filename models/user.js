'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name : DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : true,
        isUnique : function (value, next) {
          let self = this
          User.findOne({where : {email : value}})
          .then(user => {
            if (user && self.id !== user.id) {
              return next("email already used")
            }
            return next()
          })
          .catch(err => {
            return next(err)
          })
        }
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
