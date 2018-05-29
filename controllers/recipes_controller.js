var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var recipes = require("../models/recipes.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  recipes.selectAll(function(data) {
    var hbsObject = {
      recipes: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  recipes.insertOne([
    "recipeName", "recipeUrl"
  ], [
    req.body.recipeName, req.body.recipeUrl
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  recipes.updateOne({
    tried: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  recipes.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
