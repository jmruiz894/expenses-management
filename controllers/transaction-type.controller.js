import logger from "../core/logger";
import { repositories } from "../database";
import statusCode from "../references/http-status-codes.references";
import tables from "../references/db-table-name.reference";

class TransactionTypeController {
  #repository;

  getRepository() {
    if (!this.#repository)
      this.#repository = repositories.getInstance(tables.USER);
    return this.#repository;
  }

  async getTransactionType(req, res) {
    const tType = await this.getRepository().find(req.query);
    logger.info(`[GET] TType data: ${JSON.stringify(tType)}`);
    return res.status(statusCode.oK).send(tType || {});
  }

  async createTransactionType(req, res) {
    const tType = await this.getRepository().create(req.body);
    logger.info(`[POST] TType data: ${JSON.stringify(tType)}`);
    return res.status(statusCode.oK).send(tType || {});
  }

  async updateTransactionType(req, res) {
    const updatedRows = await this.getRepository().updateById(
      req.params.transactionType,
      req.body
    );
    logger.info(`[PUT] TType data: ${updatedRows}`);
    return res.status(statusCode.oK).send({ updated: updatedRows });
  }

  async deleteTransactionType(req, res) {
    const updatedRows = await this.getRepository().deleteById(
      req.params.transactionType
    );
    logger.info(`[DEL] TType data: ${updatedRows}`);
    return res.status(statusCode.oK).send({ deleted: updatedRows });
  }
}

export default new TransactionTypeController();
