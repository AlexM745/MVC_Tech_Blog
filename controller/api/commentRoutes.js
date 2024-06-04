const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//('api/comment')
//GET to get all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({});
        if (commentData.length === 0) {
            res.status(404).json({ message: "You have no comment." });
            return;
        };
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//('api/comment')
// Get comments from one blog post
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: { id: req.params.id },
        });
        if (commentData.length === 0) {
            res.status(404).json({ message: `The id ${req.params.id} has no comment.` });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//('api/comment')
// create a commment
router.post("/", withAuth, async (req, res) => {
    try{
        const commentData = await Comment.create({
            ...req.body, 
            userId: req.session.userId, 
        });
        res.status(200).json(commentData);
    }catch (err) {
        res.status(500).json(err);
    }
});

//("api/comment/:id")
//DELETE a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        
        const commentData = await Comment.destroy({
            where: {id: req.params.id},
        });
        if (!commentData) {
            res.status(404).json({
                message: "No comment is found with this id"
            });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;