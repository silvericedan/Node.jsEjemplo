"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require("express");
var persona_1 = require("./../schemas/persona");
var router = express.Router();
//Callbacks
router.get("/persona", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var persona, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, persona_1.personaSchema.find()];
            case 1:
                persona = _a.sent();
                res.send(persona);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                throw err_1;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/persona", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var persona, personaNueva, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Viene persona persona POST: ", req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                persona = new persona_1.personaSchema(req.body);
                return [4 /*yield*/, persona.save()];
            case 2:
                personaNueva = _a.sent();
                res.send(personaNueva);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                throw err_2;
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put("/persona/:_id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var persona, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, persona_1.personaSchema.findByIdAndUpdate(req.params._id, req.body)];
            case 1:
                persona = _a.sent();
                res.status(202).json({ persona: persona, success: true, mensaje: 'put exitoso' });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, res.status(404).json({ err: err_3, success: false })];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete("/persona/:_id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, persona_1.personaSchema.findByIdAndRemove(req.params._id)];
            case 1:
                _a.sent();
                res.status(202).json({ success: true, mensaje: 'delete exitoso' });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, res.status(404).json({ err: err_4, success: false })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Promises 
function getPersona() {
    return new Promise(function (resolve, reject) {
        var persona = persona_1.personaSchema.find({ nombre: "Ignacio" }).exce();
        if (persona) {
            resolve(persona);
        }
        else {
            reject(console.log("No se encontro persona"));
        }
    });
}
module.exports = router;
//# sourceMappingURL=persona.js.map