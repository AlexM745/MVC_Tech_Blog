// importing the express router
const router = require("express").Router();
// importing the models
const { Blog, Comment } = require("../../models");
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

//('/api/post/:id')
// PUT to update a blog post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!blogData) {
            res.status(404).json({ message: 'There is no ID for this Blog post' });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//('/api/post/:id')
//DELETE to delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                userId: req.session.userId,
            },
        });
        if (!blogData) {
            res.status(404).json({
                message: "No user Id found with id" ,
            });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});