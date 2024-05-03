// importing the model and datatypes 
const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/connection");
// sub class is blod that inherits from model the super class
class Blog extends Model {}

Blog.init({
    // added the title column
    title: {
        type: DataTypes.STRING, 
        allowNull:false;
    }
})
