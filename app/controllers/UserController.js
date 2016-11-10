var Music = require("../models/music");
var User = require("../models/user");

module.exports = function() {
    return {
        dashboard(request, response) {
            Music.find({uploader: request.session.user._id}, (err, result) => {
                response.render("dashboard", {
                    entries: result
                });
            });
        }
    };
}
