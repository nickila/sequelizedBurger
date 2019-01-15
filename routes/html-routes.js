var path = require("path");

module.exports = function (app) {

    app.put("/api/burgers", function(req, res) {

        res.render(path.join(__dirname, "../views/index.handlebars"))
    })   
}
