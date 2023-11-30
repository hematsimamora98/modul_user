'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_members.init({
    usme_user_id: DataTypes.INTEGER,
    usme_memb_name: DataTypes.STRING,
    usme_promote_date: DataTypes.DATE,
    usme_points: DataTypes.SMALLINT,
    usme_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_members',
  });
  return user_members;
};