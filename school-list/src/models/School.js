import { DataTypes, Model } from "sequelize";

class School extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        uf: DataTypes.STRING,
        country: DataTypes.STRING,
      },
      { sequelize, tableName: "school" }
    );

    return this;
  }
}

export default School;
