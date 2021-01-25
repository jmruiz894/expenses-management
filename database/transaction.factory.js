import { Model, DataTypes } from "sequelize";
import tables from "../references/db-table-name.reference";
import commonAttributes from "./entity.common-attributes";
import commonOptions from "../configs/sequelize-instance.config";

class Transaction extends Model {}

export default (sequelize) => {
  Transaction.init(
    {
      ...commonAttributes,
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      concept: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      ...commonOptions,
      sequelize,
      modelName: tables.TRANSACTION,
    }
  );
  
  return Transaction;
};
