// importing express and router
const router = require("express").Router();
// importing the models to use database information for routes
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
//  importing auth for help authenticating
const withauth = require("../../utils/auth");
const bcrypt = require("bcrypt");

// ("api/user")
// Post request, creates a new user and the user id and logged in state is saved to the session
router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.login_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// ("api/user/login")
//POST to check if the user information matches the data base and logs in the user.Once logged in it saves the user id and logged_in state to session
router.post("/login", (req, res) => {
  // find username name that matches request
    User.findOne({
      where:{
      username:req.body.username
    }
}).then(foundUser=>{
  // if username is not found, send message
      if(!foundUser){
        return res.status(400).json({msg:"wrong login credentials"})
      }
      // compare password with saved hash
      if(bcrypt.compareSync(req.body.password,foundUser.password)){
        // if pw matches, create session for user 
        req.session.user = {
          id:foundUser.id,
          username:foundUser.username
        }
        return res.json(foundUser)
        // redirect page??
      } else {
        return res.status(400).json({msg:"wrong login credentials"})
      }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});
// ("api/user")
// POST to logout, checks the status of the logged_in state and destroys the session.
router.post("/logout", withAuth, (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

//exports the user route
module.exports = router;


