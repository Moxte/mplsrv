var app = require('express')();
var server = require('http').Server(app);
var server = require('ws').Server;
server.listen(process.env.PORT || 3000, function () {
});

server.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log("Received: " + message);

        if (message == "hello")
        {
            ws.send("hey man from the server");
        }
    });
});
