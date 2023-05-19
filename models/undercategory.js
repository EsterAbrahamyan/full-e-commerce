'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class underCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      underCategory.belongsTo(models.Category,{foreignKey:"category_id"})
      underCategory.hasMany(models.Product,{foreignKey:"underCategory_id"})
    }
  }
  underCategory.init({
    name: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'underCategory',
  });
  return underCategory;
};