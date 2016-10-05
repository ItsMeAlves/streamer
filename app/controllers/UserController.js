var Music = require("../models/music");

module.exports = function() {
    return {
        dashboard(request, response) {
            Music.find({uploader: request.session.user.id}, (err, result) => {
                response.render("dashboard", {
                    user: request.session.user,
                    entries: result
                });
            });
        }
    };
}
