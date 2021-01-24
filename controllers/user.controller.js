import statusCode from "../references/http-status-codes.references";

class UserController {
  getUser(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  createUser(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  updateUser(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }

  deleteUser(req, res) {
    return res.status(statusCode.methodNotAllowed).send({
      message: "Method not implemented yet",
      query: req.query,
    });
  }
}

export default new UserController();
