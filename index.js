var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/message', function (req, res){
	console.log(req.body);
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;


})