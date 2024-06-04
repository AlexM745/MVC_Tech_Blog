// importing express and router
const express = require("express");
//imporiting express as a router
const router = express.Router();
// importing the models to use database information for routes
const { User, Blog, Comment } = require("../../models");
// importing bcrypt to import and hash passwords
const bcrypt = require("bcrypt");

// Post request, creates a new user and the user id and logged in state is saved to the session
router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.login_in = true;

            res.status(200).json(userData);
        });
    }catch (err) {
        res.status(400).json(err);
    }
});

//POST to check if the user information matches the data base and logs in the user.Once logged in it saves the user id and logged_in state to session
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
            res.status(400).json({message:"Incorrect email or password, try again"})
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({message:"Incorrect email or password, try again"})
            return;
        }

        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.login_in = true;

            res.json({user: userData, message:"You are logged in!!"})
        });

    }catch (err) {
        res.status(400).json(err);
    }
});



