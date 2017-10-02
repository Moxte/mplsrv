var server = require('ws').Server;
var s = new server({ port: 3000 });

s.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log("Received: " + message);

        if (message == "hello")
        {
            ws.send("hey man from the server");
        }
    });
});
