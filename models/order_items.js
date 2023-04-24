'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Order_items.hasMany(models.Order_items, {
            foreignKey: 'order_id'
          });
          Order_items.hasMany(models.Order_items, {
            foreignKey: 'product_id'
          });
    }
  }
  Order_items.init({
    order_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_items',
  });
  return Order_items;
};