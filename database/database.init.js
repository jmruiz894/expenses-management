import { Sequelize } from "sequelize";
import logger from "../core/logger";

export default async function (setup) {
  const db = new Sequelize(...setup);
  try {
    await db.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("unable to connect to the database:", error);
  }
  return db;
}
