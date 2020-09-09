"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApi = void 0;
var bodyparser = require("body-parser");
var config = require("./config");
var connections_1 = require("./connections");
var requireDir = require('require-dir');
function initApi(app) {
    connections_1.Connections.initialize();
    app.use(bodyparser.json({ limit: '50mb' }));
    app.all('*', function (req, res, next) {
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
        // Permitir que el método OPTIONS funcione sin autenticación
        if ('OPTIONS' === req.method) {
            res.header('Access-Control-Max-Age', '1728000');
            res.sendStatus(200);
        }
        else {
            next();
        }
    });
    for (var m in config.modules) {
        if (config.modules[m].active) {
            var routes = requireDir(config.modules[m].path);
            for (var route in routes) {
                if (config.modules[m].middleware) {
                    app.use('/api' + config.modules[m].route, config.modules[m].middleware, routes[route]);
                }
                else {
                    app.use('/api' + config.modules[m].route, routes[route]);
                }
            }
        }
    }
}
exports.initApi = initApi;
//# sourceMappingURL=inicializar.js.map