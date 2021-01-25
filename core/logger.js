import path from "path";
import { transports, createLogger, format } from "winston";

const getLogDir = (name) =>
  path.resolve(
    process.env.LOG_PATH || path.resolve(__dirname, "../dist"),
    `${name}.log`
  );
const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.File({ filename: getLogDir("ml-log") })],
});
if (JSON.parse(process.env.SHOW_CONSOLE || "1")) {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
export default logger;