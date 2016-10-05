var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/streamer");

module.exports = mongoose;
