const express = require("express");
const faker = require("faker");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render("index.ejs", {titleName: "Game Software Programming"});
});

app.get("/design", function(req, res) {
	res.render("design.ejs", {titleName : "Game Design"});
});

app.get("/engines", function(req, res) {
	res.render("engines.ejs", {titleName : "Commercial Engines"});
});

app.get("/languages", function(req, res) {
	res.render("languages.ejs", {titleName : "Programming Languages"});
});

app.get("/generator", function(req, res) {
	
	var names = [];
	var nouns = [];
	var verbs = [];
	
	for (var i = 0; i < 6; i++)
	{
		names.push(faker.name.firstName());
		
		var nounType = Math.floor(Math.random() * 3);
		
		if (nounType === 0)
			nouns.push(faker.hacker.noun().toLowerCase());
		else if (nounType === 1)
			nouns.push(faker.name.title().toLowerCase());
		else 
			nouns.push(faker.commerce.product().toLowerCase());
		
		verbs.push(faker.hacker.verb());
	}
	
	
	// "Super Mario Bros."
	var template_mario = "<b><u>Super " + names[0] + " " + nouns[0] + "s</u></b><br/><br/>" +
		"A game played by up to " + faker.random.number() + " player(s), starring " + 
		names[0] + " and their " + nouns[0] + ", " + names[1] + ".<br/><br/>" + "The " + nouns[1] + 
		" of the fantastical " + nouns[2] + " Kingdom, " + nouns[3] + " " + names[2] +
		", has been captured by the evil " + names[3] + "!<br/><br/>" + verbs[0].charAt(0).toUpperCase() + 
		verbs[0].substring(1) + " on every " + nouns[4] + " you find, and traverse through " + 
		faker.random.number() + " worlds to save " + names[2] + ". However, you never know; they may be in another " + 
		nouns[5] + "...";
	
	// "The Legend of Zelda"
	var template_zelda = "<b><u>The " + nouns[0].charAt(0).toUpperCase() + nouns[0].substr(1) + " of " + names[0] + 
		"</b></u>" + "<br/><br/>You play as " + names[1] +", a young " + nouns[1] + " who is on a quest across the land of " +
		nouns[2] + " to save " + nouns[3] + " " + names[0] + " from the clutches of the evil " + names[2] + 
		".<br/><br/>Explore the land, defeat the evil minions, and collect all " + faker.random.number() + " pieces of the coveted " + 
		nouns[4] + " of " + nouns[5] + ". Beware: it's dangerous to go alone.";
		
	// "Castlevania"
	var template_castlevania = "<b><u>" + nouns[0].charAt(0).toUpperCase() + nouns[0].substr(1) + "vania" +
		"</b></u><br/><br/>The player controls the " + nouns[1] + " of legendary " + nouns[2] + " hunter " +
		names[0] + " " + names[1] + ". For generations, the " + names[1] + " family has hunted " + nouns[2] + 
		" and other monsters. Time and time again, the " + names[1] + " family has been tasked to " + verbs[0] +
		" the menace known as " + names[2] + ".<br/><br/>The journey will be treacherous, so collect plenty of " +
		nouns[3] + " and holy " + nouns[4] + ".";
	
	var templates = [template_mario, template_zelda, template_castlevania];
	
	var result = templates[Math.floor(Math.random() * templates.length)];
	
	res.render("generator.ejs", 
		{titleName : "Game Story Generator", 
		generatedText : result}
	);
});

app.get("/resources", function(req, res) {
	res.render("resources.ejs", {titleName : "Resources"});
});

// Heroku server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Running Express Server..")
});

/* Offline testing only
app.listen("8081", "127.0.0.1", function(){
	console.log("Running Express Server..")
});
*/