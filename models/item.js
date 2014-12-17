"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    photo: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsTo(models.User, { as: 'Owner' });
        Item.belongsTo(models.User, { as: 'Tradee' });
        // Item.belongsTo(models.Category);
      }
    }
  });

  return Item;
};
