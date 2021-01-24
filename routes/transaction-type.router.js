import { Router } from "express";
import transactionTypeController from "../controllers/transaction-type.controller";

const router = Router({
    mergeParams: true,
});

router.get(
    "/",
    transactionTypeController.getTransactionType
);
router.post(
    "/",
    transactionTypeController.createTransactionType
);
router.put(
    "/:transactionTypeId",
    transactionTypeController.updateTransactionType
);
router.delete(
    "/:transactionTypeId",
    transactionTypeController.deleteTransactionType
);

export default router;