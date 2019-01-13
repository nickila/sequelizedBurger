var db = require("../models");

module.exports = function (app) {

    app.get("/api/burgers", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurger) {
            console.log(dbBurger)
            res.json(dbBurger);
        });
    });
    // db.Burgers.create({
    //     burger_name: 
    //     //burger_name: newBurger.burger_name
    // }).then(function (dbBurger) {
    //     console.log(dbBurger)

    // })
    app.post("/api/burgers", function(req, res) {
        db.Burgers.create(req.body).then(function(dbBurger) {
            console.log(dbBurger)
            res.json(dbBurger);
        });
    });

};