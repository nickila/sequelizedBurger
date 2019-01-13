var db = require("./models");

db.Burgers.create({
    burger_name: "cheddar burger"
}).then(function(dbBurgers) {
    console.log(dbBurgers);
});