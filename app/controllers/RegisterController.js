var User = require("../models/user");

module.exports = function() {
    return {
        signup(request, response) {
            var firstName = request.params.firstName;
            var lastName = request.params.lastName;
            var email = request.params.email;
            var password = request.params.password;

            var user = new User({
                firstName, lastName, email, password
            });
            user.save();

            response.redirect("/login");
        }
    }
}
