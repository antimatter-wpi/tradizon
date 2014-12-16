"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addIndex('Items', ['OwnerId', 'TradeeId']);
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.removeIndex('Items', ['OwnerId', 'TradeeId']);
    done();
  }
};
