// importing the express router
const router = require("express").Router();
// importing the models
const {Blog, Comment, User} = require("../../models");
// importing auth for help authenticating
const withauth = require("../../util/auth");