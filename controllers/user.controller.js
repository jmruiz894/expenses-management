import tables from "../references/db-table-name.reference";
import statusCode from "../references/http-status-codes.references";
import { repositories } from "../database";
import logger from "../core/logger";

class UserController {
  #repository;

  getRepository() {
    if (!this.#repository)
      this.#repository = repositories.getInstance(tables.USER);
    return this.#repository;
  }

  async getUser(req, res) {
    const user = await this.getRepository().find(req.query);
    logger.info(`[GET] User data: ${JSON.stringify(user)}`);
    return res.status(statusCode.oK).send(user || {}); 
  }

  async createUser(req, res) {
    const user = await this.getRepository().create(req.body);
    logger.info(`[POST] User data: ${JSON.stringify(user)}`);
    return res.status(statusCode.oK).send(user || {});
  }

  async updateUser(req, res) {
    const updatedRows = await this.getRepository().updateById(
      req.params.userId,
      req.body
    );
    logger.info(`[PUT] User data: ${updatedRows}`);
    return res.status(statusCode.oK).send({ updated: updatedRows });
  }

  async deleteUser(req, res) {
    const updatedRows = await this.getRepository().deleteById(
      req.params.userId
    );
    logger.info(`[DEL] User data: ${updatedRows}`);
    return res.status(statusCode.oK).send({ deleted: updatedRows });
  }
}

export default new UserController();
