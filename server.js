import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from "body-parser";
import router from "./routes";
import { initialize } from "./database";

export const app = express();
export const beforeLoad = [initialize];
/**
 * Global App Config
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);
