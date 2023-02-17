import dotenv from "dotenv";
dotenv.config();

const config = {
  dialect: process.env.SEQUELIZE_DIALECT,
  host: process.env.SEQUELIZE_HOST,
  username: process.env.SEQUELIZE_USER,
  password: process.env.SEQUELIZE_PASS,
  database: process.env.SEQUELIZE_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  },
};

export default config;
