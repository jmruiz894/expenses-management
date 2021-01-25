/**
 * Constructor properties of Sequelize instance
 */
import path from "path";
import logger from "../core/logger";

export default [
  {
    dialect: process.env.SEQUELIZE_DIALECT || "sqlite",
    storage:
      process.env.SEQUELIZE_DIALECT_STORAGE ||
      path.resolve(__dirname, "../dist/db/temporal_db.sqlite"),
    logging: (...args) => logger.info(...args),
  },
];
