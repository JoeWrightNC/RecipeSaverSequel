var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/recipes_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
