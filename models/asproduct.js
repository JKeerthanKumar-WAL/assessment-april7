"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asproduct.belongsTo(models.Category, {
        foreignKey: "categoryId",
        onDelete: "CASCADE",
      });
    }
  }
  Asproduct.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      inStore: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Asproduct",
    }
  );
  return Asproduct;
};
