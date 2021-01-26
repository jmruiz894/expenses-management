import logger from "../core/logger";
import { repositories } from "../database";
import statusCode from "../references/http-status-codes.references";
import tables from "../references/db-table-name.reference";

class TransactionController {
  #repository;

  getRepository() {
    if (!this.#repository)
      this.#repository = repositories.getInstance(tables.TRANSACTION);
    return this.#repository;
  }

  async getTransaction(req, res) {
    const transaction = await this.getRepository().find(req.query);
    logger.info(`[GET] Transaction data: ${JSON.stringify(transaction)}`);
    return res.status(statusCode.oK).send(transaction || {});
  }

  async createTransaction(req, res) {
    const transaction = await this.getRepository().create(req.body);
    logger.info(`[POST] Transaction data: ${JSON.stringify(transaction)}`);
    return res.status(statusCode.oK).send(transaction || {});
  }

  async updateTransaction(req, res) {
    const updatedRows = await this.getRepository().updateById(
      req.params.transactionId,
      req.body
    );
    logger.info(`[PUT] Transaction data: ${updatedRows}`);
    return res.status(statusCode.oK).send({ updated: updatedRows });
  }

  async deleteTransaction(req, res) {
    const updatedRows = await this.getRepository().deleteById(
      req.params.transactionId
    );
    logger.info(`[DEL] Transaction data: ${updatedRows}`);
    return res.status(statusCode.oK).send({ deleted: updatedRows });
  }
}

export default new TransactionController();
