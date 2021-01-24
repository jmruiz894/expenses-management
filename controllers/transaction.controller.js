import statusCode from "../references/http-status-codes.references";

class TransactionController {
  getTransaction(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  createTransaction(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  updateTransaction(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  deleteTransaction(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }
}

export default new TransactionController();
