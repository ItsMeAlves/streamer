var express = require("express");
var app = express();
var session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "./resources/views");
app.set("PORT", process.env.PORT || 3000);
app.use(express.static("./resources/assets"));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

module.exports = app;
