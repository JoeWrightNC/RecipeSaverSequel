var exports = module.exports = {}
var db = require("../models");

exports.signup = function(req,res){
	res.render('signup'); 
}

exports.signin = function(req,res){
	res.render('signin'); 
}

exports.dashboard = function(req,res){
  res.render('dashboard')
}

exports.totry = function(req,res){
  db.Recipes.findAll( /* {
    include: [db.User],
    order: "name ASC"
  }  */)
  .then(function(data) {
    var hbsObject = {
      recipes: data
    };
    res.render("totry", hbsObject);
  })
  .catch(function(err){
    res.json({status: "ERROR", message: err})
  })
} 

exports.saved = function(req,res){
  db.Recipes.findAll(/* {
    include: [db.User],
    order: "name ASC"
  } */)
  .then(function(data) {
    var hbsObject = {
      recipes: data
    };
    res.render("saved", hbsObject);
  })
  .catch(function(err){
    res.json({status: "ERROR", message: err})
  })
} 

exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });
}
