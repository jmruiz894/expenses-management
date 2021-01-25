import init from "./database.init";
import TransactionTypeFactory from "./transaction-type.factory";
import TransactionFactory from "./transaction.factory";
import UserFactory from "./user.factory";
import TransactionTypeRepository from "./transaction-type.repository";
import TransactionRepository from "./transaction.repository";
import UserRepository from "./user.repository";
import setup from "../configs/sequelize.setup";

export const instances = {};
export async function initialize() {
  const db = await init(setup);
  const User = UserFactory(db);
  const Transaction = TransactionFactory(db);
  const TransactionType = TransactionTypeFactory(db);
  // Defining Table's relationship
  User.hasMany(Transaction);
  Transaction.belongsTo(User);
  Transaction.belongsTo(TransactionType);
  TransactionType.hasMany(Transaction);
  instances.userRepository = new UserRepository(User);
  instances.transactionRepository = new TransactionRepository(Transaction);
  instances.transactionTypeRepository = new TransactionTypeRepository(User);
  return db;
}
