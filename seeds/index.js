// importing squelize and the models to seed the database
const sequelize = require("../config/connection");
const {User, Blog, Comment} = require("../models");


// information the is going to be seeding from users
const users = [
    {
        username:"alexis", 
        password:"pass123" 
    },
    {
        username:"clari", 
        password:"pass456" 
    },
    {
        username:"bob", 
        password:"pass789" 
    }
]


// the information that is going to be seeded from blogs
const blogs = [
    {
        title:"The First Post", 
        content:"Hello World!", 
        userId: 1 
    },
    {
        title:"The second Post", 
        content:"Logging Off World!", 
        userId: 1
    },
    {
        title:"Bob Post", 
        content:"I am a sponge under the sea", 
        userId: 3
    },
    {
        title:"Clari post", 
        content:"Don and Dex are my cats", 
        userId: 2
    },
]

