// importing sequelize connection, model and dataypes from sequelize 
const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');
// imports bcrypt to has passwords
const bcrypt = require("bcrypt");
// the user is the subclass that is inheriting and the model the superclass .
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    // adding the column for user
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // adding the column for password
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },

}, {
    // adding a hook to trigger when the user password is added that it is hashed
    // by using bcrypt npm package
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        },

    },
    // model propeties
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

// exports the User model
module.exports = User;