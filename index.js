var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

s.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log("Received: " + message);

        if (message == "hello")
        {
            ws.send("hey man from the server");
        }
    });
});
