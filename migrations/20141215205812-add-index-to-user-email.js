"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addIndex('Users', ['email']);
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.removeIndex('Users', ['email']);
    done();
  }
};
