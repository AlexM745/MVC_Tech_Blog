const withAuth = (req, res, next) => {
    // if the session id for the user is mission then it will redirect user to login handlebars page
    if (!req.session.user_id) {
        // respose to login page
        res.redirect("/login");
        return;
    }else {
        // if it user session id does exists then it will move to the next route
        next()
    }
}
// exporting the withAuth fucntion.
module.exports = withAuth;