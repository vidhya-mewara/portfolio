const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/services", (req, res) => {
    res.render("services");
})
app.get("/projects", (req, res) => {
    res.render("projects");
})






app.listen(8080, () => {
    console.log("Server is listining to port 8080")
});
