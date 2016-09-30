var express = require("express");
var app = express();
var session = require("express-session");
var consign = require("consign");

app.set("view engine", "ejs");
app.set("views", "./resources/views");
app.set("PORT", process.env.PORT || 3000);
app.use(express.static("./resources/assets"));
app.use(session({
    secret: "secretbolado",
    resave: false,
    saveUninitialized: false
}));

consign({cwd: "app"})
    .include(".")
    .into(app);

module.exports = app;
