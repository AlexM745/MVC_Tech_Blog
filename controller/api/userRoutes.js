// importing express and router
const router = require("express").Router();
// importing the models to use database information for routes
const { User } = require("../../models");

// ("api/users")
// Post request, creates a new user and the user id and logged in state is saved to the session
router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.login_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// ("api/users/login")
//POST to check if the user information matches the data base and logs in the user.Once logged in it saves the user id and logged_in state to session
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username }
        });
        if (!userData) {
            res.status(400).json({ message: "Incorrect username, try again" })
            return;
        }
        //check password
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password, try again" })
            return;
        }
        //create session and send response back
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: "You are logged in!!" })
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// ("api/users")
// POST to logout, checks the status of the logged_in state and destroys the session.
router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//exports the user route
module.exports = router;


