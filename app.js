const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render("index.ejs");
});

app.get("/design", function(req, res) {
	res.render("design.ejs");
});

app.get("/engines", function(req, res) {
	res.render("engines.ejs");
});

app.get("/languages", function(req, res) {
	res.render("languages.ejs");
});

app.get("/resources", function(req, res) {
	res.render("resources.ejs");
});

// Heroku server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Running Express Server..")
});

// Offline testing only
app.listen("8081", "127.0.0.1", function(){
	console.log("Running Express Server..")
});
