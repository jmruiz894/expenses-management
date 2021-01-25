import { Router } from "express";
import routerConfig from "../configs/router.config";
import userController from "../controllers/user.controller";

const router = Router(routerConfig);

router.get("/", userController.getUser.bind(userController));
router.post("/", userController.createUser.bind(userController));
router.put("/:userId", userController.updateUser.bind(userController));
router.delete("/:userId", userController.deleteUser.bind(userController));

export default router;
