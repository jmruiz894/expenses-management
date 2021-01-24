import { Router } from "express";
import routerConfig from "../commons/router.config";
import apiV1 from "./api-v1.router";

const router = Router(routerConfig);

router.all("/", (req, res) => {
    res.send({ message: "welcome to express server" });
  });
router.use("/api", apiV1);

export default router;