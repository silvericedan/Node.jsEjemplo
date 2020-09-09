"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaSchema = void 0;
var mongoose_1 = require("mongoose");
var schemaPersona = new mongoose_1.Schema({
    nombre: String,
    apellido: String,
    edad: Number
});
exports.personaSchema = mongoose_1.model('schemaPersona', schemaPersona, 'personas');
//# sourceMappingURL=persona.js.map