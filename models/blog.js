// importing the model and datatypes 
const {Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/connection");
// sub class is blog that inherits from model the super class
class Blog extends Model {}

Blog.init({
    // added the title column
    title: {
        type: DataTypes.STRING, 
        allowNull:false
    },
    // added the content column
    content: {
        type: DataTypes.TEXT, 
        allowNull:false
    }

},{
    sequelize, 
    //disable the modification of tablenames
    freezeTableName: true,
    //use underscore instead of auto camelcase
    underscored: true, 
    // the model name
    modelName: "blog", 
});

// exports the Blog model
module.exports = Blog;