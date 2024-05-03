// importing the model and datatypes 
const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/connection");
const { trace } = require("console");
// sub class is blod that inherits from model the super class
class Blog extends Model {}

Blog.init({
    // added the title column
    title: {
        type: DataTypes.STRING, 
        allowNull:false;
    },
    // added the content column
    content: {
        type: DataTypes.TEXT, 
        allowNull:false
    }

},{
    sequelize, 
    //diable the modification of tablenames
    freezeTableName: true,
    //use underscore instead of auto camelcase
    underscored: true, 
    // the model name
    modelName: "blog", 
});

// exports the Blog model
module.exports = Blog;