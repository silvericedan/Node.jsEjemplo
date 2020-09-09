import * as express from 'express';
import { initApi } from './inicializar';

const app = express();

initApi(app);

var server = require('http').Server(app);

const port = 3002;
server = app.listen(3002, () => console.log("Escuchando en el puerto %s ", port));