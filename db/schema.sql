DROP DATABASE IF EXISTS recipes_db;
CREATE DATABASE recipes_db;
USE recipes_db;

CREATE TABLE recipes
(
	id int NOT NULL AUTO_INCREMENT,
	recipeName VARCHAR(255) NOT NULL,
  recipeUrl VARCHAR(8000) NOT NULL,
	tried BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
