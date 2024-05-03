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
    freezeTableName:true, 
    underscored: true, 
    modelName: "comment", 
});

// exports the Comment model
module.exports = Comment;