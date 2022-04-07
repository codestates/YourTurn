'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.interest.hasMany(models.group, {
        foreignKey: "interest_id",
        sourceKey: "id"
      })
    }
  }
  interest.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'interest',
  });
  return interest;
};