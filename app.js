var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("./assets"));

app.get("/", (request, response) => {
    response.render("index");
});

http.listen(3000, () => {
    console.log("listening on 3000");
});
