'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    user_id: DataTypes.INTEGER,
    user_full_name: DataTypes.STRING,
    user_type: DataTypes.STRING,
    user_company_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_phone_number: DataTypes.STRING,
    user_modified_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};