"use strict";
var express = require("express");
var persona_1 = require("./../schemas/persona");
var router = express.Router();
router.get('/persona', function (req, res, next) {
    persona_1.personaSchema.find(function (err, persona) {
        if (err)
            return;
        res.send(persona);
    });
});
module.exports = router;
//# sourceMappingURL=persona.js.map