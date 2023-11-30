'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_password.init({
    uspa_user_id: DataTypes.INTEGER,
    uspa_passwordHash: DataTypes.STRING,
    uspa_passwordSalt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_password',
  });
  return user_password;
};