var server = require('ws').Server;
var portHRC = process.env.PORT || 5000
var s = new server({ port: portHRC });

s.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log("Received: " + message);

        if (message == "hello")
        {
            ws.send("hey man from the server");
        }
    });
});
