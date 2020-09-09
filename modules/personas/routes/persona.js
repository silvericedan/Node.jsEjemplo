"use strict";
var express = require("express");
var persona_1 = require("./../schemas/persona");
var router = express.Router();
//Callbacks
router.get("/persona", function (req, res, next) {
    persona_1.personaSchema.find(function (err, persona) {
        if (err)
            return;
        res.send(persona);
    });
});
router.post("/persona", function (req, res) {
    console.log("Viene persona persona POST: ", req.body);
    var persona = new persona_1.personaSchema(req.body);
    persona.save(function (err, persona) {
        if (err) {
            return err;
        }
        res.json(persona);
    });
});
router.put("/persona/:_id", function (req, res, next) {
    console.log("Viene del PUT: ", req.body);
    persona_1.personaSchema.findByIdAndUpdate(req.params._id, req.body, { new: true }, function (err, persona) {
        if (err) {
            return err;
        }
        console.log("Persona Nueva: ", persona);
        return res.send(persona);
    });
});
router.delete("/persona/:_id", function (req, res, next) {
    console.log("Viene del DELETE: ");
    persona_1.personaSchema.findByIdAndRemove(req.param._id, function (err, persona) {
        if (err) {
            console.log("Error: ", err);
        }
        console.log("Persona Borrada: ", persona);
        res.json(persona);
    });
});
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