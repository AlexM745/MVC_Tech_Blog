// importing squelize and the models to seed the database
const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');


// information the is going to be seeding from users
const users = [
    {   id: 1,
        username: 'alexis',
        password: 'pass123'
    },
    {   id: 2,
        username: 'clari',
        password: 'pass456'
    },
    {   id: 3,
        username: 'bob',
        password: 'pass789'
    }
]


// the information that is going to be seeded from blogs
const blogs = [
    {
        title: 'The First Post',
        content: 'Hello World!',
        userId: 1
    },
    {
        title: 'The second Post',
        content: 'Logging Off World!',
        userId: 1
    },
    {
        title: 'Bob Post',
        content: 'I am a sponge under the sea',
        userId: 3
    },
    {
        title: 'Clari post',
        content: 'Don and Dex are my cats',
        userId: 2
    },
]

// the information that is goin gto 
const comments = [
    {
        body: 'Do you live in a pineapple under the sea?',
        blogId: 3,
        userId: 1
    },
    {
        body: 'Where are you going?',
        blogId: 2,
        userId: 2
    },
    {
        body: 'Hello!',
        blogId: 1,
        userId: 3
    },
    {
        body: 'Those are great cat names!',
        blogId: 4,
        userId: 1
    },
]

const Seeds = async () => {
    // the users, blogs, and comments are all created in bulk when seeding the database
    try {
        await sequelize.sync({force:true})
        await User.bulkCreate(users, {
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch (err) {
        console.log(err)
    }
}
// calls the function so that they seeds are created
Seeds();