module.exports = function(app) {
    app.get("/", (request, response) => {
        response.render("index");
    });

    app.get("/login", (request, response) => {
        response.render("login");
    });

    app.post("/login", app.middlewares.form,
        app.controllers.AuthController.login);

    app.get("/logout", app.controllers.AuthController.logout);

    app.get("/signup", (request, response) => {
        response.render("signup");
    });

    app.post("/signup", app.middlewares.form,
        app.controllers.RegisterController.signup);

    app.get("/dashboard", app.middlewares.auth,
        app.controllers.UserController.dashboard);

    app.get("/add", app.middlewares.auth, (request, response) => {
        response.render("add");
    });

    app.post("/add", app.middlewares.auth, app.middlewares.form,
        app.controllers.ContentController.add);

    app.get("/music", app.middlewares.auth,
        app.controllers.ContentController.getMusic);

    app.get("/all", app.middlewares.auth,
        app.controllers.ContentController.listAll);
}
