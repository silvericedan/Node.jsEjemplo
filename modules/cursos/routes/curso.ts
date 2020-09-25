import { cursoSchema } from './../schemas/curso';
import * as express from 'express';

const router = express.Router();

router.get('/curso', async (req, res) => {
    try {
        let curso = await cursoSchema.find();
        res.send(curso);
    } catch(err){
        throw err;
    }
});

router.get('/cursoId/:id', async (req, res) => {
    let idCurso = req.params.id;
    try {
        let curso = await cursoSchema.findById(idCurso);
        res.send(curso);
    } catch(err){
        throw err;
    }
});

router.post('/curso', async (req, res) => {
    console.log('Entra a curso nuevo');
    try {
        const curso = new cursoSchema(req.body);
        let cursoNuevo = await curso.save();

        res.send(cursoNuevo);
    } catch (err) {
        throw err;
    }
});

router.put("/curso/:_id", async (req, res, next) => {
    
    try {
        let curso = await cursoSchema.findByIdAndUpdate(req.params.id, req.body)
    
        res.send(curso);
    } catch (err) {
        throw err;
    }
    
  });

export = router;