import { Router } from "express";
import routerConfig from "../configs/router.config";
import userController from "../controllers/user.controller";

const router = Router(routerConfig);

router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.daleteUser);

export default router;
