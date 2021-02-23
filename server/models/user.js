const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

const PASSWORD_SALT_ROUNDS = 10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 20],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
    {
      indexes: [{ unique: true, fields: ['email'] }],
      hooks: {
        beforeCreate: async (user) => {
          if (!user.password) {
            return;
          }
          // eslint-disable-next-line no-param-reassign
          user.password = await bcrypt.hash(
            user.password,
            PASSWORD_SALT_ROUNDS,
          );
        },
      },
    },
  );
  return User;
};
