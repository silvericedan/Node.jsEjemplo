"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoSchema = void 0;
var mongoose_1 = require("mongoose");
var schemaCurso = new mongoose_1.Schema({
    nombreCurso: { type: String, lowercase: true },
    profesor: { type: String, lowercase: true }
});
//el tercer parametro es el nombre de la base de datos
exports.cursoSchema = mongoose_1.model('Curso', schemaCurso, 'cursos');
//# sourceMappingURL=curso.js.map