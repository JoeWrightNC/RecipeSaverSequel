module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipeName: { type: DataTypes.STRING, allowNull: false},
    recipeURL: { type: DataTypes.STRING, allowNull: false},
    tried: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  });

  Recipes.associate = function(models) {
    Recipes.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipes;
};
