import { Schema, model } from 'mongoose';

const schemaPersona = new Schema({
    nombre: String,
    apellido: String,
    edad: Number

});

export let personaSchema = model('schemaPersona', schemaPersona, 'personas');