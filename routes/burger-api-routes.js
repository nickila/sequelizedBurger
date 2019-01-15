var db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burgers.findAll({})
            .then(function (dbBurgers) {
                res.render(path.join(__dirname, "../views/index.handlebars"), {burgers: dbBurgers});
            });
    });

    app.get("/api/burgers", function (req, res) {
        db.Burgers.findAll({})
            .then(function (dbBurgers) {
                res.json(dbBurgers);
            });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: false
        });
    });

};