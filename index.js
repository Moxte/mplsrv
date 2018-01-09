'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const s = new SocketServer({ server });


var clients = [];
var playerSpawnPoints = [];

s.on('connection', function (ws) {

    ws.on('message', function (message) {
       // console.log("Received: " + message);
        message = JSON.parse(message);
       
        if (typeof message.nv !== 'undefined' && message.nv.length > 0) { 
          //  console.log("New player connected " + message.name);
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
		//receive and send to all clients except sender player's shooting done
        else if (typeof message.s !== 'undefined' && message.s.length > 0) {
            var PlayerShoot = {
                p: message.p,
                s: message.s
            }
            s.clients.forEach(function (client) {
                if (client !== ws) client.send(JSON.stringify(PlayerShoot)); //!==
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
	
});
