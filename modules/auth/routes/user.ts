import * as express from 'express';
import { userSchema } from './../schemas/user';
import { login, registro } from './../controllers/authController';


const router = express.Router();

router.post('/registro', async (req, res) => {
    console.log("Entra a registro", req.body);
    try {
        let newRegistro = await registro(req.body); 
    }catch(err){
        throw err;
    } 
});

router.post('/login', async (req, res) => {
    console.log('Entra a login');
    try {
        let token = await login(req.body);
        console.log('Este es el token: ', token);
        res.send({
            mensaje: 'Login Exitoso',
            token: token
        });
    }catch(err){
        res.send({
            error: err
        });
    }
});

export = router;