import { Router } from "express";
import transactionController from "../controllers/transaction.controller";
import routerConfig from "../configs/router.config";

const router = Router(routerConfig);

router.get(
    "/",
    transactionController.getTransaction.bind(transactionController)
);
router.post(
    "/",
    transactionController.createTransaction.bind(transactionController)
);
router.put(
    "/:transactionId",
    transactionController.updateTransaction.bind(transactionController)
);
router.delete(
    "/:transactionId", 
    transactionController.deleteTransaction.bind(transactionController)
);

export default router;
