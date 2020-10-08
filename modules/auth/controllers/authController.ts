import { userSchema } from './../schemas/user';
import { key } from './../../../config.private';

import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export async function registro(usuario: any) {
    const user = new userSchema({
        username: usuario.username,
        email: usuario.email,
        password: bcrypt.hashSync(usuario.password, 8)
    });

    try {
        let newUser = await user.save();
        return newUser;
    } catch(err){
        throw err;
    }
}

export async function login(usuario: any) {
    try{
        let userLogin = await userSchema.findOne({username: usuario.username});
        console.log(userLogin);
        if (!userSchema){
            return false;
        }

        let passwordValid = bcrypt.compareSync(usuario.password, userLogin.password);

        if (!passwordValid){
            let msg = "Password invalido!!!";
            return msg;
        }

        //let token = jwt.sign({usuario: userLogin.username}, key.secret, {expiresIn: 86400}); //Expira en 24 Hs
        let token = jwt.sign({id: userLogin.id, username: userLogin.username, email: userLogin.email, rol: 'Administrador'}, key.secret, {expiresIn: 86400 });
        console.log('Token: ', token);
        return token;
    }catch(err){
        throw err;
    }
}
