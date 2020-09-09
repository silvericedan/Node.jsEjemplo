"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connections = void 0;
var mongoose = require("mongoose");
var configPrivate = require("./config.private");
function schemaDefaults(schema) {
    schema.set('toJson', {
        virtuals: true,
        versionKey: false
    });
}
var Connections = /** @class */ (function () {
    function Connections() {
    }
    Connections.initialize = function () {
        mongoose.Promise = global.Promise;
        mongoose.plugin(schemaDefaults);
        mongoose.connect(configPrivate.hosts.mongoDb_main.host, configPrivate.hosts.mongoDb_main.options);
        this.main = mongoose.connections;
    };
    return Connections;
}());
exports.Connections = Connections;
//# sourceMappingURL=connections.js.map