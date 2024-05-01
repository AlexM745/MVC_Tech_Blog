// importing sequelize connection, model and dataypes from sequelize 
const { Model, Datatypes } = require("sequelize");
const sequelize = require('../config/connection');
// the user is the superclass and the model the subclass that is inheriting.
class User extends Model { }

User.init({
    // adding the column for user
    username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
    },
})