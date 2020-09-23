import { Schema, model } from 'mongoose';

const schemaCurso = new Schema({
    nombreCurso: { type: String, lowercase: true},
    profesor: { type: String, lowercase: true}

});

//el tercer parametro es el nombre de la base de datos
export let cursoSchema = model('Curso', schemaCurso, 'cursos');