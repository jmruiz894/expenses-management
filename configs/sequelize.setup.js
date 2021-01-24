/**
 * Constructor properties of Sequelize instance
 */
import path from "path";

export default [
  {
    dialect: process.env.SEQUELIZE_DIALECT || "sqlite",
    storage:
      process.env.SEQUELIZE_DIALECT_STORAGE ||
      path.resolve(__dirname, "dist/db/temporal_db.sqlite"),
  },
];
