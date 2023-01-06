'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electModel.init({
    District: DataTypes.STRING,
    meterNum: DataTypes.DOUBLE,
    monthlyDue: DataTypes.DOUBLE,
    meterCount: DataTypes.DOUBLE,
    vat: DataTypes.INTEGER,
    amountPaid: DataTypes.DOUBLE,
    balance: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'electModel',
  });
  return electModel;
};