var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: true
    }
});

userSchema.methods.authenticate = function(password) {
    return this.password === password
}

var User;

if(mongoose.models.User) {
    User = mongoose.model("User");
}
else {
    User = mongoose.model("User", userSchema);
}

module.exports = User;
