const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render("index.ejs");
});


// Heroku server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Running Express Server..")
});

// Offline testing only
app.listen("8081", "127.0.0.1", function(){
	console.log("Running Express Server..")
});
