import TransactionType from "./transaction-type.entity";
import Transaction from "./transaction.entity";
import User from "./user.entity";
import setup from "../configs/sequelize.setup";
import initializeSequelize from "./database.init";
// Defining Table's relationship

User.hasMany(Transaction);
Transaction.belongsTo(User);
Transaction.belongsTo(TransactionType);
TransactionType.hasMany(Transaction);

const database = {};
initializeSequelize(setup).then((instance) => {
  database.instance = instance;
});

export { TransactionType, Transaction, User, database };
