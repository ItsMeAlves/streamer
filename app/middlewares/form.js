var formidable = require("formidable");

module.exports = function() {
    return function(request, response, next) {
        var form = new formidable.IncomingForm();
        form.uploadDir = "./storage";
        form.keepExtensions = true;

        form.parse(request, (err, fields, files) => {
            request.formError = err;
            request.params = fields;
            request.files = files;

            next();
        });
    }
}
