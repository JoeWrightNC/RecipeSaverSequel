module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipeName: { type: DataTypes.STRING, allowNull: false},
    recipeURL: { type: DataTypes.STRING, allowNull: false},
    recipeGenre: DataTypes.STRING,
    tried: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  });
  return Recipes;
};
