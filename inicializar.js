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