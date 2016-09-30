module.exports = function() {
    return function(request, response, next) {
        if(request.session && request.session.user) {
            next();
        }
        else {
            response.redirect("/login");
        }
    }
}
