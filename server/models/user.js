"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.comment, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.hasMany(models.post, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.belongsToMany(models.team, {
        through: "user_team",
        foreignKey: "user_id",
      });
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
