import { userSchema } from '../schemas/user';

async function checkusuario(user) {
	try {
		let usuario = await userSchema.find({ username: user });

		if (usuario) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		throw err;
	}
}