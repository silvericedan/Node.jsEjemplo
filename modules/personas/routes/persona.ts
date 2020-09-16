import * as express from "express";
import { personaSchema } from "./../schemas/persona";

const router = express.Router();

//Callbacks

router.get("/persona", (req, res, next) => {
  personaSchema.find(function (err, persona) {
    if (err) return;

    res.send(persona);
  });

});

router.post("/persona", (req, res) => {
  console.log("Viene persona persona POST: ", req.body);
  const persona = new personaSchema(req.body);

  persona.save((err, persona) => {
    if (err) {
      return err;
    }
    res.json(persona);
  });
});

router.put("/persona/:_id", (req, res, next) => {
  console.log("Viene del PUT: ", req.body);
  personaSchema.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, persona) => {
      if (err) {
        return err;
      }
      console.log("Persona Nueva: ", persona);
      return res.send(persona);
    }
  );
});

router.delete("/persona/:_id", (req, res, next) => {
  console.log("Viene del DELETE: ");
  personaSchema.findByIdAndRemove(req.params._id, (err, persona) => {
    if (err) {
      console.log("Error: ", err);
    }
    console.log("Persona Borrada: ", persona);
    res.json(persona);
  });
});

// Promises 

   function getPersona() {
  return new Promise((resolve, reject) => {
    let persona = personaSchema.find({ nombre: "Ignacio" }).exce();
    if (persona) {
      resolve(persona);
    } else {
      reject(console.log("No se encontro persona"));
    }
  });
}  

// Async y Await

export = router;