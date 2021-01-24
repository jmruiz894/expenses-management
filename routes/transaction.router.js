import { Router } from "express";
import transactionController from "../controllers/transaction.controller";
import routerConfig from "../commons/router.config";

const router = Router(routerConfig);

router.get(
    "/",
    transactionController.getTransaction
);
router.post(
    "/",
    transactionController.createTransaction
);
router.put(
    "/:transactionId",
    transactionController.updateTransaction
);
router.delete(
    "/:transactionId",
    transactionController.deleteTransaction
);

export default router;