var app = require("./config/express");

app.listen(app.get("PORT"), () => {
    console.log("listening", app.get("PORT"));
});
