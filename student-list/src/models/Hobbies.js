import { DataTypes, Model } from "sequelize";

class Hobbies extends Model {
  static init(sequelize) {
    super.init(
      { title: DataTypes.STRING, student_id: DataTypes.INTEGER },
      { sequelize, tableName: "hobbies" }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: "student_id",
      as: "have_hobbies",
    });
  }
}

export default Hobbies;
