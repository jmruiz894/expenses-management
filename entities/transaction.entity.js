import { Model, DataTypes } from "sequelize";
import tables from "../references/db-table-names.reference";
import commonAttributes from "./entity.common-attributes";
import commonOptions from "../commons/sequelize-instance.config";

class Transaction extends Model {}

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
        modelName: tables.TRANSACTION,
    }
);

export default Transaction;
