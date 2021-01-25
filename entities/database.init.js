import { Sequelize } from "sequelize";

// eslint-disable-next-line func-names
export default async function (setup) {
  const db = new Sequelize(...setup);
  try {
    await db.authenticate();
    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("unable to connect to the database:", error);
  }
  return db;
}
