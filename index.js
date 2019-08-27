var express = require('express');
var bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
//Funcion para recibir y enviar devuelta mensajes
app.post('/message', function (req, res){
	console.log(req.body);
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;

	res.send(`
		</Response>
			<Message>
				Hello ${msgFrom}. You said: ${msgBody}
			</Message>
		</Response>
		`)
})

app.listen(PORT);