import { Model, DataTypes } from "sequelize";
import tables from "../references/db-table-name.reference";
import commonAttributes from "./entity.common-attributes";
import commonOptions from "../configs/sequelize-instance.config";

class User extends Model {}

export default (sequelize) => {
  User.init(
    {
      ...commonAttributes,
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // TODO: Include userName property when user authentication has been done
      email: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      ...commonOptions,
      sequelize,
      modelName: tables.USER,
    }
  );
  return User;
};
