const express = require("express"); 

const router = express.Router();

const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {

    burger.insertOne(req.params.name, function(result) {
        res.json({ id: result.insertId });

        console.log("That's a good one!")
    })
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    const id = "id = " + req.params.id;
  
    burger.updateOne({
      bln: true
    }, id, function(result) {
      if (result.changedRows == 0) {
        //If no rows were changed / no ID exists, throw a 404 status error.
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;