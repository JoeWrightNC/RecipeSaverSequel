module.exports = function(sequelize, Sequelize) {
  var Recipes = sequelize.define("Recipes", {
    recipeName: { type: Sequelize.STRING, allowNull: false},
    recipeURL: { type: Sequelize.STRING, allowNull: false},
    tried: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
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
