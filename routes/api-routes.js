var express = require("express");
var db = require("../models")
//var recipes = require("../models/recipes.js");

module.exports = function(app) {
  app.get("/dashboard", function(req, res) {
    db.recipes.findAll({
      //include: [ db.User ],
      order: "name ASC"
    })
    .then(function(data) {
      var hbsObject = {
        recipes: data
      };
      res.render("dashboard", hbsObject);
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
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch(function(err) {
      res.json({status: "ERROR", message: err})
    })
  })

  app.delete("/api/recipes/:id", function(req, res) {
    var recipeID = req.params.id;
    db.recipes.findAll({
      where: {
        id: recipeID
      }
    })
    .then(function(updatingEntry) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch(function(err) {
      res.json({status: "ERROR", message: err})
    })
  }); 
}