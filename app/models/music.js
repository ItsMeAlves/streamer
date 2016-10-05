var mongoose = require("mongoose");

var musicSchema = mongoose.Schema({
    title: String,
    artist: String,
    path: String,
    uploader: mongoose.Schema.Types.ObjectId
});

musicSchema.methods.generateUrl = function() {
    return "/music?p=" + this.path;
}

var Music;
if(mongoose.models.Music) {
    Music = mongoose.model("Music");
}
else {
    Music = mongoose.model("Music", musicSchema);
}

module.exports = Music;
