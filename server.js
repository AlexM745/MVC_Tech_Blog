const express = require("express");
const sequelize = require("./config/connection");
const session = require("express-session");
const exphbs = require("express-handlebars");
const allRoutes = require('./controller');



