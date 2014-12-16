"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          if (value) {
            User.find({ where: {email: value} })
            .success(function(user) {
              if (user) {
                next('this email has been used');
              } else {
                next();
              }
            })
            .error(function(err) {
              next(err.message);
            })
          } else {
            next('empty email');
          }
        }
      }
    },
    address: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return User;
};
