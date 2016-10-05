module.exports = function() {
    return function(request, response, next) {
        if(request.session && request.session.user) {
            response.redirect("/dashboard");
        }
        else {
            next();
        }
    }
}
