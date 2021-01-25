import { app, beforeLoad } from "./server";
import logger from "./core/logger";

const port = process.env.APP_PORT || 3000;

const startLocal = async (appInstance, appPort, beforeLoadFuncs = []) => {
  await Promise.all(beforeLoadFuncs.map((func) => Promise.resolve(func())));
  return new Promise((resolve) => {
    appInstance.listen(appPort, () => resolve(true));
  });
};

startLocal(app, port, beforeLoad).then(() => {
  logger.log(`App listening on port ${port}!`);
});
