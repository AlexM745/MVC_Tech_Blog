// importing express and router
const express = require("express");
//imporiting express as a router
const router = express.Router();
// importing the models to use database information for routes
const{User, Blog, Comment} = require("../../models");
// importing bcrypt to import and hash passwords
const bcrypt = require("bcrypt");

