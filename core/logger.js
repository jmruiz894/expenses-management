import path from "path";
import { transports, createLogger, format } from "winston";

const getLogDir = (name) =>
  path.resolve(
    process.env.LOG_PATH || path.resolve(__dirname, "../dist"),
    `${name}.log`
  );
const loggerFormat = format.combine(
  format.align(),
  format.timestamp(),
  format.colorize(),
  format.simple(),
  format.printf(({ timestamp, level, message }) => {
    const label = `${timestamp}   ${level}   `;
    const labelOffset = " ".repeat(label.length - 20); // colorize offset
    const formattedMessage = message
      .trim()
      .match(/.{1,100}/g)
      .map((line, i) => (i ? labelOffset + line : line))
      .join("\n");
    return `${label}${formattedMessage}`;
  })
);
const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: loggerFormat,
  transports: [new transports.File({ filename: getLogDir("ml-log") })],
});
if (JSON.parse(process.env.SHOW_CONSOLE || "1")) {
  logger.add(
    new transports.Console({
      format: loggerFormat,
    })
  );
}
export default logger;
