var db = require("../models")
const env = require('../.env');  


module.exports = function(app) {
  
  app.post("/api/recipes", function (req, res) {
    var userId = '';
    db.Recipes.create({
      recipeName: req.body.recipeName,
      recipeURL: req.body.recipeURL,
      userId: req.body.userId
    })
    .then(function (recipe) {
        res.json(recipe);
    })
    .catch(function (err) {
      console.log(err);
    res.json({status: "ERROR", message: err})
    })
  });

  app.put("/api/recipes/:id", function(req, res) {
    var recipeID = req.params.id;
    //var rating = req.body.rating;
    db.Recipes.update({
      tried: true
    }, {
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
    db.Recipes.destroy({
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