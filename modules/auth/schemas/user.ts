import { Schema, model } from 'mongoose';

const schemaUser = new Schema({
    username: String,
    email: String,
    password: String
});

export let userSchema = model('User', schemaUser, 'Users');