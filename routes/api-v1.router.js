import { Router } from "express";
import userRouter from "./user.router";
import transactionRouter from "./transaction.router";
import transactionTypeRouter from "./transaction-type.router";
import routerConfig from "../commons/router.config";

const apiRouter = Router(routerConfig);
const router = Router(routerConfig);

userRouteruserRouter.use("/transaction", transactionRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/transaction-type", transactionTypeRouter);

router.use("/v1", apiRouter);
export default router;