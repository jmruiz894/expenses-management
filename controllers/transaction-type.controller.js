import statusCode from "../references/http-status-codes.reference";

class TransactionTypeController {
  getTransactionType(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  createTransactionType(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  updateTransactionType(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  deleteTransactionType(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }
}

export default new TransactionTypeController();
