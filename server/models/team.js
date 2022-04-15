"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.team.belongsToMany(models.user, {
        through: "user_team",
        foreignKey: "team_id",
      });
      models.team.hasMany(models.post, {
        foreignKey: "team_id",
        sourceKey: "id",
      });
      models.team.belongsTo(models.interest, {
        foreignKey: "interest_id",
        targetKey: "id",
      });
    }
  }
  team.init(
    {
      team_name: DataTypes.STRING,
      team_description: DataTypes.STRING,
      interest_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "team",
    }
  );
  return team;
};
