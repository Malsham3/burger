//code that will call the ORM functions using burger specific input for the ORM.

const orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne("burgers", "name", function(res) {
      cb(res);
    });
  },
  updateOne: function(bln, id, cb) {
    orm.updateOne("burgers", bln, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
