const connection = require("./connection");

// Methods that will execute the necessary MySQL commands in the controllers. These methods will be used in order to retrieve and store data in the database.


const orm = {

    // selectAll()
    selectAll(table) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // insertOne()
    insertOne: function (table, col, name, cb) {
        const queryString = `INSERT INTO ?? (??) VALUE (?)`;

        connection.query(queryString, [table, col, name], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // updateOne()
    updateOne: function (table, bln, id, cb) {
        const queryString = "UPDATE ?? SET devoured ? WHERE id = ?";

        console.log(queryString);
        connection.query(queryString, [table, bln, id], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;