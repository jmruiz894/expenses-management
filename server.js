import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";

const app = express();

/**
 * Global App Config
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);

export default app;