'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_bonus_points extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_bonus_points.init({
    ubpo_id: DataTypes.INTEGER,
    ubpo_user_id: DataTypes.INTEGER,
    ubpo_total_points: DataTypes.SMALLINT,
    ubpo_bonus_type: DataTypes.STRING,
    ubpo_created_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user_bonus_points',
  });
  return user_bonus_points;
};