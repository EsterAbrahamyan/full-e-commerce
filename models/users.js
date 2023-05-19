'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasOne(models.Cart,{foreignKey:"user_id"})
    }
  }
  Users.init({
    firstname: DataTypes.TEXT,
    lastname: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    role: DataTypes.TEXT,
    isverified: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};