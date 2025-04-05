const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.send("<h1>Hi there</h1>");
});

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num});
});


app.get("/id/:username", (req, res) => {
    let {username} = req.params;
    let friends = ["Elon Mask", "Iron man", "Hulk", "Sadia", "Sunny"];
    res.render("facebook.ejs", {username, friends});
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});