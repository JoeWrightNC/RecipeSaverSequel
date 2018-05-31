module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipeName: DataTypes.STRING,
    recipeURL: DataTypes.STRING,
    recipeGenre: DataTypes.STRING,
    tried: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  });
  return Recipes;
};
