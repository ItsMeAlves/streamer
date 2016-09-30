module.exports = function(app) {
    var user = {
        email: "email@email.com",
        password: "123"
    }

    app.get("/", (request, response) => {
        response.render("index");
    });

    app.get("/login", (request, response) => {
        response.render("login");
    });

    app.post("/login", app.middlewares.form, (request, response) => {
        console.log(request.params);
        if(request.params.email === user.email &&
            request.params.password === user.password) {
            request.session.user = true;
        }

        response.redirect("/dashboard");
    });

    app.get("/dashboard", app.middlewares.auth, (request, response) => {
        response.render("dashboard", {
            user: request.session.user
        });
    });
}
