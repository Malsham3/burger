const connection = require("./connection.js");

// Methods that will execute the necessary MySQL commands in the controllers. These methods will be used in order to retrieve and store data in the database.


const orm = {

    // selectAll()
    selectAll: function (table, cb) {
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString,[table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // insertOne()
    insertOne: function (table, col, burger_name, cb) {
        const queryString = `INSERT INTO ?? (??) VALUE (?)`;

        connection.query(queryString, [table, col, burger_name], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // updateOne()
    updateOne: function (table, state, id, cb) {
        const queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

        connection.query(queryString, [table, state, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;