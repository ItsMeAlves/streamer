var dotenv = require("dotenv");
dotenv.config();

var app = require("./config/express");
var db = require("./config/db");
var consign = require("consign");

consign({cwd: "app"})
    .include(".")
    .into(app);

app.listen(app.get("PORT"), () => {
    console.log("listening", app.get("PORT"));
});
