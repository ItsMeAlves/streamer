var Music = require("../models/music");
var fs = require("fs");

module.exports = function() {
    return {
        add(request, response) {
            var music = new Music({
                title: request.params.title,
                artist: request.params.artist,
                path: request.files.fileupload.path,
                uploader: request.session.user._id
            });

            music.save();

            response.redirect("/dashboard");
        },

        getMusic(request, response) {
            response.setHeader("content-type", "audio/mp3");
            fs.createReadStream(__dirname + "/../../" + request.query.path)
                .pipe(response);
        },

        listAll(request, response) {
            Music.find({}, (err, result) => {
                response.render("all", {
                    entries: result
                });
            });
        }
    };
}
