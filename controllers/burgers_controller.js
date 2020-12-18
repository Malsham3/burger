const router = require("express").Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {

  const burger_name = req.body.name;

  burger.insertOne(burger_name, function (result) {

    res.json({ id: result.insertId });

    console.log("That's a good one!")
  })
});

router.put("/api/burgers/:id", function (req, res) {

  burger.updateOne(true, req.params.id, function (result) {
    if (result.changedRows == 0) {
      //If no rows were changed / no ID exists, throw a 404 status error.
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("Yumm")
    }
  });
});

// Export routes for server.js to use.
module.exports = router;