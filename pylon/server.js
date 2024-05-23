/*
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(55455);
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('establishing a new connection with client');
    var connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime())
    }, 100);
});
*/


const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(55455, () => {
    console.log('WebSocket server is listening on port 55455');
});

const wsServer = new WebSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('Establishing a new connection with the client');
    const connection = request.accept(null, request.origin);

    setInterval(() => {
        const message = JSON.stringify({ timestamp: new Date().getTime() });
        connection.sendUTF(message);
        console.log(message);
    }, 1000);

    connection.on('close', () => {
        console.log('Connection closed');
    });
});
