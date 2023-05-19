'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.underCategory,{foreignKey:"underCategory_id"});
     Product.hasMany(models.CartItems,{foreignKey:"product_id"})
    }
  }
  Product.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    underCategory_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};