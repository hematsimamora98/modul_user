'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_profiles.init({
    uspro_id: DataTypes.INTEGER,
    uspro_national_id: DataTypes.STRING,
    uspro_birt_date: DataTypes.DATE,
    uspro_job_title: DataTypes.STRING,
    uspro_marital_status: DataTypes.STRING,
    uspro_gender: DataTypes.STRING,
    uspro_addr_id: DataTypes.INTEGER,
    uspro_user_id: DataTypes.INTEGER,
    uspro_addr_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_profiles',
  });
  return user_profiles;
};