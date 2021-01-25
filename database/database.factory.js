import tables from "../references/db-table-names.reference";
import TransactionTypeFactory from "./transaction-type.factory";
import TransactionFactory from "./transaction.factory";
import UserFactory from "./user.factory";
import TransactionTypeRepository from "./transaction-type.repository";
import TransactionRepository from "./transaction.repository";
import UserRepository from "./user.repository";

export default class DatabaseFactory {
    #database;

    #instances;

    constructor(db) {
        this.#database = db;
        this.#instances = {};
    }

    setDatabase(db) {
        this.#database = db;
        this.initializeInstances();
    }

    initializeInstances() {
        const User = UserFactory(this.#database);
        const Transaction = TransactionFactory(this.#database);
        const TransactionType = TransactionTypeFactory(this.#database);
        // Defining Table's relationship
        User.hasMany(Transaction);
        Transaction.belongsTo(User);
        Transaction.belongsTo(TransactionType);
        TransactionType.hasMany(Transaction);
        this.#instances[tables.USER] = new UserRepository(User);
        this.#instances[tables.TRANSACTION] = new TransactionRepository(Transaction);
        this.#instances[tables.TRANSACTION_TYPE] = new TransactionTypeRepository(User);
    }

    getInstance(instanceName) {
        return this.#instances[instanceName];
    }
}
