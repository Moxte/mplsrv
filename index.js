var server = require('ws').Server;
//var portHRC = process.env.PORT || 5000
var s = new server({ port: 3000  }); //portHRC

var clients = [];
var playerSpawnPoints = [];

s.on('connection', function (ws) {
/*
    ws.on('message', function (message) {
        console.log("Received: " + message);
        message = JSON.parse(message);
       
        if (typeof message.nv !== 'undefined' && message.nv.length > 0) { 
            console.log("New player connected " + message.name);
            var playerConnected = {
                p: message.p,
                nv: message.nv
            };
            ws.send(JSON.stringify(playerConnected));
           
        }
		//receive and send to all clients except sender player's movement
        else if (typeof message.v !== 'undefined' && message.v.length > 0) {
            var PlayerMoved = {
                p: message.p,
                v: message.v
            }
            s.clients.forEach(function (client) {
                if (client !== ws) client.send(JSON.stringify(PlayerMoved)); //!==
            });
        }

		//receive and send to all clients except sender player's rotation
        else if (typeof message.r !== 'undefined' && message.r.length > 0) {
            var PlayerRotated = {
                p: message.p,
                r: message.r
            }

            s.clients.forEach(function (client) {
                if (client !== ws) client.send(JSON.stringify(PlayerRotated)); //!==
            });
        };
    });
	*/
});
