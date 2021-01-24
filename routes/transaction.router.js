import { Router } from "express";
import transactionController from "../controllers/transaction.controller";

const router = Router({
    mergeParams: true,
});

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