import { initialize } from "./database";

initialize().then(async (db) => {
  await db.sync({
    force: process.env.SEQUELIZE_SYNC_FORCE,
    alter: process.env.SEQUELIZE_SYNC_ALTER,
  });
});