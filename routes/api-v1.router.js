import { Router } from "express";
import userRouter from ".user.router";
import transactionRouter from "./transaction.router";
import transactionTypeRouter from "./transaction-type.router";

const apiRouter = Router({
    mergeParams: true,
});
const router = Router({
    mergeParams: true,
});

userRouteruserRouter.use("/transaction", transactionRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/transaction-type", transactionTypeRouter);

router.use("/v1", apiRouter);
export default router;