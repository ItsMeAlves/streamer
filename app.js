var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static("./assets"));

app.get("/", (request, response) => {
    response.render("index");
});

app.listen(3000, () => {
    console.log("listening on 3000");
});
