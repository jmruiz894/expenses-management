import { Router } from "express";
import transactionTypeController from "../controllers/transaction-type.controller";
import routerConfig from "../configs/router.config";

const router = Router(routerConfig);

router.get(
  "/",
  transactionTypeController.getTransactionType.bind(
    transactionTypeController
  )
);
router.post(
  "/",
  transactionTypeController.createTransactionType.bind(
    transactionTypeController
  )
);router.put(
  "/:transactionTypeId",
  transactionTypeController.updateTransactionType.bind(
    transactionTypeController
  )
);
router.delete(
  "/:transactionTypeId",
  transactionTypeController.deleteTransactionType.bind(
    transactionTypeController
  )
);

export default router;
