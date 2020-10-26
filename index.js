"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var inicializar_1 = require("./inicializar");
var app = express();
inicializar_1.initApi(app);
var server = require('http').Server(app);
var port = 3002;
server = app.listen(3002, function () { return console.log("Escuchando en el puerto %s ", port); });
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('a user connected');
});
io.emit('test', 'enviando desde backend');
//# sourceMappingURL=index.js.map