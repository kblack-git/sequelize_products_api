'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Orders.hasMany(models.Order_items, {
            foreignKey: 'customer_id'
          });
    }
  }
  Orders.init({
    customer_id: DataTypes.STRING,
    order_date: DataTypes.STRING,
    total_amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};