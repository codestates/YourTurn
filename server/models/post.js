'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.post.belongsTo(models.group, {
        foreignKey: "group_id",
        sourceKey: "id"
      })
      models.post.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id"
      });
      models.post.hasMany(models.comment, {
        foreignKey: "post_id",
        sourceKey: "id"
      });
    }
  }
  post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    total_likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};