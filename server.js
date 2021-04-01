const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.user(bodyParser.json());

const mochUserData = [
	{name: "Mark"},
	{name: "Jill"}
];

app.get("/users", function(req, res) {
	res.json({
		success: true,
		message: "successfully got users. Nice!",
		users: mochUserData
	});
});

app.get("/users/:id", function(req, res) {
	res.json({
		success: true,
		message: "got one user",
		user: req.params.id
	});
});

app.post("/login", function(req, res) {
	const userName = req.body.username;
	const password = req.body.password;

	const mochUserName = "billyTheKid";
	const mochPassword = "superSecret";

	if (userName === mochUserName && password === mochPassword) {
		res.json({
			success: true,
			message: "password and username match!",
			token: "encrypted token goes here"
		});
	} else {
		res.json({
			success: false,
			message: "password ang username do not match"
		})
	}
});

app.listen(8000, function(){
	console.log("server is running");
});