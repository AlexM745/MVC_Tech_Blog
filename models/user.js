// importing sequelize connection, model and dataypes from sequelize 
const { Model, Datatypes } = require("sequelize");
const sequelize = require('../config/connection');
// the user is the subclass that is inheriting and the model the superclass .
class User extends Model { }

User.init({
    // adding the column for user
    username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
    },
    // adding the column for password
    password: {
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            len:[8]
        }
    },
})

// exports the User model
module.exports = User;