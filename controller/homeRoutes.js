const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User, attributes: ["username"] }]
        })

        const blogs = blogData.map((blog) => blog.get({ plain: true }));


        res.render("home", {
            blogs,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a blog by id to render 
router.get("/blog/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }

});


//("/dashboard")
// the dashboard will only show for the users that are logged in
// withAuth middleware to prevent access to the route
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        //finding user based on the session id
        const blogData = await Blog.findAll({
            where: {
                // ID from the session
                user_id: req.session.user_id,
            }, include: [                {
                    model: Comment,include: {model: User,attributes: ['username'],},
                },
                {model: User,attributes: ['username']},
            ],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render("dashboard", {
            ...blogs,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// ("/login")
// GET login page if not logged in send back to dashboard
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("login")
});





// exporting route
module.exports = router;