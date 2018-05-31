var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
  res.send('Welcome to Passport with Sequelize');
});
//Models
var models = require("./models");
//Routes
var authRoute = require('./routes/auth')(app,passport);
//load passport strategies
require('./config/passport/passport')(passport, models.user);
//Sync Database
models.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });  
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});