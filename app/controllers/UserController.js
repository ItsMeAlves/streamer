var Music = require("../models/music");
var User = require("../models/user");

module.exports = function() {
    return {
        dashboard(request, response) {
            Music.find({uploader: request.session.user._id}, (err, result) => {
                User.find({}, (e, r) => {
                    console.log(result, r, request.session.user._id);
                });
                response.render("dashboard", {
                    user: request.session.user,
                    entries: result
                });
            });
        }
    };
}
