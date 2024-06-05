// imporitng the models 
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// associations for the tables 

User.hasMany(Blog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Comment.belongsTo(Blog, {
    foreignKey: 'blogId',
});

Blog.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
    foreignKey: 'blogId',
    onDelete: 'CASCADE'
});

// export the models
module.exports = {
    User, 
    Blog, 
    Comment
}