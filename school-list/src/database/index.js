import { Sequelize } from "sequelize";

import configDatabase from "../config/database.js";
import models from "../models/index.js";

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.connection = new Sequelize(
      configDatabase.database,
      configDatabase.username,
      configDatabase.password,
      {
        host: configDatabase.host,
        dialect: configDatabase.dialect,
        define: configDatabase.define,
      }
    );

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );

    try {
      await this.connection.authenticate();

      console.log("[Sequelize] => Connection with database made success...");
    } catch (error) {
      console.log("[Sequelize] => Falha ao estabelecer conexão com o banco");
      console.log("[Sequelize] => Error: " + error);
    }
  }
}

export default new Database();
