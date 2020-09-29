"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var config_private_1 = require("./../../../config.private");
var jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ mensaje: "No existe token" });
    }
    jwt.verify(token, config_private_1.key.secret, function (err, decoded) {
        if (err) {
            return res.status(401).send({ mensaje: "No esta autorizado" });
        }
        console.log("Datos verificados: ", decoded);
        next();
    });
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=authJwt.js.map