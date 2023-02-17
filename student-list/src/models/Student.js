import { DataTypes, Model } from "sequelize";

class Student extends Model {
  static init(sequelize) {
    super.init(
      { first_name: DataTypes.STRING, email: DataTypes.STRING },
      { sequelize, tableName: "student" }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Hobbies, {
      foreignKey: "id",
      as: "have_hobbies",
    });
  }
}

export default Student;
