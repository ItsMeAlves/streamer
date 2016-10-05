var User = require("../models/user");

module.exports = function() {
    return {
        login(request, response) {
            var email = request.params.email;
            var password = request.params.password;

            User.findOne({email: email}, (err, user) => {
                if(err || user === null) {
                    response.redirect("/login");
                }
                else {
                    if(user.authenticate(password)) {
                        request.session.user = user;
                        response.redirect("/dashboard");
                    }
                    else {
                        response.redirect("/login");
                    }
                }
            });
        },

        logout(request, response) {
            delete request.session.user
            response.redirect("/login");
        }
    }
}
