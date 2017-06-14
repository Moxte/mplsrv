var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function(req, res){
	res.send('Hey OMG I am ALIVE');
});

console.log('------ server');
