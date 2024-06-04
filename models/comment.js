// importing sequelize connection, model and dataypes from sequelize 
const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init({
    // the body column for the comment table
    body: {
        type: DataTypes.TEXT,
        allowNull: false

    },
    // date column for the comment table
    date: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW, 
    }, 

},{
    sequelize, 
    //disable the modification of tablenames
    freezeTableName: true,
    //use underscore instead of auto camelcase
    underscored: true, 
    // the model name
    modelName: "blog", 
});

// exports the Comment model
module.exports = Comment;