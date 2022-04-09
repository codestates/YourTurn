'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.group.belongsToMany(models.user, {
        through: "user_group",
        foreignKey: "group_id",
      })
      models.group.hasMany(models.post, {
        foreignKey: "group_id",
        sourceKey: "id"
      })
      models.group.belongsTo(models.interest, {
        foreignKey: "interest_id",
        sourceKey: "id"
      })
    }
  }
  group.init({
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    interest_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};