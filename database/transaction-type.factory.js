import { Model, DataTypes } from "sequelize";
import tables from "../references/db-table-name.reference";
import commonAttributes from "./entity.common-attributes";
import commonOptions from "../configs/sequelize-instance.config";

class TransactionType extends Model {}

export default (sequelize) => {
  TransactionType.init(
    {
      ...commonAttributes,
      factor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      ...commonOptions,
      sequelize,
      modelName: tables.TRANSACTION_TYPE,
    }
  );
  return TransactionType;
};
