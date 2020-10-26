import * as express from 'express';
import { initApi } from './inicializar';
import * as io from 'socket.io';

const app = express();

initApi(app);

var server = require('http').Server(app);

const port = 3002;
server = app.listen(3002, () => console.log("Escuchando en el puerto %s ", port));

var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    
  });
io.emit('test','enviando desde backend');


