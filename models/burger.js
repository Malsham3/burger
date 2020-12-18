//code that will call the ORM functions using burger specific input for the ORM.

const orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", "burger_name", burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(state, id, cb) {
    orm.updateOne("burgers", state, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
