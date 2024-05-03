// imporitng the models 
const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment");

// associations for the tables 

User.hasMany(Blog);
Blog.belongsTo(User);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

User.hasMany(Comment);
Comment.belongsTo(User);

// export the models
module.exports = {
    User, 
    Blog, 
    Comment
}