import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router({
    mergeParams: true,
});

router.get(
    "/",
    userController.getUser
);
router.post(
    "/",
    userController.createUser
);
router.put(
    "/:userId",
    userController.updateUser
);
router.delete(
    "/:userId",
    userController.daleteUser
);

export default router;