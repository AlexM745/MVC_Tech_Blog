// importing sequelize connection, model and dataypes from sequelize 
const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init({
    // the body column
    body: {
        type: DataTypes.TEXT,
        allowNull: false

    },

})