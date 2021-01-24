import { Sequelize } from "sequelize";
import TransactionType from "./transaction-type.entity";
import Transaction from "./transaction.entity";
import User from "./user.entity";
import setup from "../configs/sequelize.setup";
// Defining Table's relationship

User.hasMany(Transaction);
Transaction.belongsTo(User);
Transaction.belongsTo(TransactionType);
TransactionType.hasMany(Transaction);

const database = new Sequelize(...setup);

export { TransactionType, Transaction, User, database };
