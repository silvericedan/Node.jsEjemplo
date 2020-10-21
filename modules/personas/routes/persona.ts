import * as express from "express";
import { personaSchema } from "./../schemas/persona";
import { verifyToken } from './../../auth/middlewares/authJwt';

const router = express.Router();

//Callbacks

router.get("/persona", async (req, res, next) => {
  try {
    let persona = await personaSchema.find();
    res.send(persona);
  } catch (err) {
    throw err;
  }
});

router.post("/persona", async (req, res) => {
  console.log("Viene persona persona POST: ", req.body);
  try {
    const persona = new personaSchema(req.body);
    let personaNueva = await persona.save()
    res.send(personaNueva);
  } catch (err) {
    throw err;
  }
});

router.put("/persona/:_id", async (req, res, next) => {
  try {
    const persona = await personaSchema.findByIdAndUpdate(req.params._id, req.body);
    res.status(202).json({ persona, success: true, mensaje: 'put exitoso' });
  } catch (err) {
    return res.status(404).json({ err, success: false });
  }
});

router.delete("/persona/:_id", async (req, res, next) => {
  try {
    await personaSchema.findByIdAndRemove(req.params._id);
    res.status(202).json({ success: true, mensaje: 'delete exitoso' });
  } catch (err) {
    return res.status(404).json({ err, success: false });
  }
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