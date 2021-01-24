import TransactionType from "./transaction-type.entity";
import Transaction from "./transaction.entity";
import User from "./user.entity";
// Defining Table's relationship

User.hasMany(Transaction);
Transaction.belongsTo(User);
Transaction.belongsTo(TransactionType);
TransactionType.hasMany(Transaction);

export { TransactionType, Transaction, User };