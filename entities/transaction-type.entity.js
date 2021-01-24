import { Model, DataTypes } from "sequelize";
import tables from "../references/db-table-names.reference";
import commonAttributes from "./entity.common-attributes";
import commonOptions from "../configs/sequelize-instance.config";

class TransactionType extends Model {}

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
    modelName: tables.TRANSACTION_TYPE,
  }
);

export default TransactionType;
