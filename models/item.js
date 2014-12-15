"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    photo: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsTo(models.User);
      }
    }
  });

  return Item;
};
