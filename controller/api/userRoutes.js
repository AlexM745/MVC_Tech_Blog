// importing express and router
const express = require("express");
const router = express.Router();
// importing the models to use database information for routes
const{User, Blog, Comment} = require("../../models");

