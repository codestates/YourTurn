"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.interest.hasMany(models.team, {
        foreignKey: "interest_id",
        sourceKey: "id",
      });
    }
  }
  interest.init(
    {
      interest_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "interest",
    },
    {
      timestamps: false,
    }
  );
  return interest;
};
