var express = require("express");
var db = require("../models")
//var recipes = require("../models/recipes.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.recipes.findAll({
      include: [ db.User ],
      order: "name ASC"
    })
    .then(function(data) {
      var hbsObject = {
        recipes: data
      };
      res.render("index", hbsObject);
    })
    .catch(function(err){
      res.json({status: "ERROR", message: err})
    })
  });
  
  app.post("/api/recipes", function(req, res) {
    db.recipes.create(req.body) 
    .then(function(recipe) {
      //res.redirect("/")
      res.json({ id: result.insertId });
    })
    .catch(function(err) {
      res.json({status: "ERROR", message: err})
    })
  });
  
  app.put("/api/recipes/:id", function(req, res) {
    var recipeID = req.params.id;
    var rating = req.body.rating;
    db.recipes.findAll({
      where: {
        id: recipeID
      }
    })
    .then(function(updatingEntry) {
      //you left off here
    })
  })
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
}