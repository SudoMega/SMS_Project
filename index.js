var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
//Funcion para recibir y enviar devuelta mensajes
app.post('/message', function (req, res){
	console.log(req.body);
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;

	console.log(msgFrom);
	console.log(msgBody);

	res.send(`
		</Response>
			<Message>
				Hello ${msgFrom}. You said: ${msgBody}
			</Message>
		</Response>
		`)
})

app.listen(3000);