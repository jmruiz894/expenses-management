import { Router } from "express";
import transactionTypeController from "../controllers/transaction-type.controller";
import routerConfig from "../commons/router.config";

const router = Router(routerConfig);

router.get("/", transactionTypeController.getTransactionType);
router.post("/", transactionTypeController.createTransactionType);
router.put(
  "/:transactionTypeId",
  transactionTypeController.updateTransactionType
);
router.delete(
  "/:transactionTypeId",
  transactionTypeController.deleteTransactionType
);

export default router;
