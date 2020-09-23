import { cursoSchema } from './../schemas/curso';
import * as express from 'express';

const router = express.Router();

 router.post('/curso' , async (req, res) => {
    console.log('Entra a curso nuevo'); 
    try{
        const curso = new cursoSchema(req.body);
        let cursoNuevo = await curso.save();

        res.send(cursoNuevo);
    } catch (err) {
         throw err;
    }
 });

export = router;