const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//('api/comment')
//GET to get all comments
router.get('/', async (req, res) => {
    try{ 
      const dbCommentData = await Comment.findAll({});
      if (dbCommentData.length === 0) {
        res.status(404).json({ message: "You have no comment."});
        return;
      };
      res.status(200).json(dbCommentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });