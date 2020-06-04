let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
let friends = ["Tony", "Miranda", "Justin", "Pierre"];

app.get("/", function(req, res) {
    res.render("home");

});

app.post("/addFriend", function(req, res) {
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");

});

app.get("/friends", function (req, res) {

    //pass array of friends through the template below.
    res.render("friends", {friends: friends});

});



app.listen(3000, function () {
   console.log("Server started");
});