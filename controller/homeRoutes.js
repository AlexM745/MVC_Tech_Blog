const router = require("express").Router();
const { User, Blog, Comment } = require("../models");


router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User, attributes: ["username"] },
            {
                model: Comment, include: { model: User, attributes: ["username"] }
            }]
        })

        const blogs = blogData.map((blog) => blog.get({ plain: true }));


        res.render("home", {
            blogs,
            loggedIn: req.session.loggedIn,
        });


    } catch (err) {
        res.status(500).json(err);
    }

})




// exporting route
module.exports = router;