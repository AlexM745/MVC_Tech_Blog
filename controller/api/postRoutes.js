// importing the express router
const router = require("express").Router();
// importing the models
const {Blog, Comment, User} = require("../../models");
// importing auth for help authenticating
const withauth = require("../../util/auth");

// ('/api/blog')
//POST to create a new blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.create({ ...req.body, userId: req.session.userId });
        console.log("This is the new blog post", blogData);
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

