import init from "./database.init";
import setup from "../configs/sequelize.setup";
import DatabaseFactory from "./database.factory";

export const repositories = new DatabaseFactory();

export async function initialize() {
  const db = await init(setup);
  repositories.setDatabase(db);
  return db;
}
