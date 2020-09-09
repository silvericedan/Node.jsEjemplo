import * as express from 'express';
import { personaSchema } from './../schemas/persona';

const router = express.Router();

router.get('/persona', (req, res, next) => {
    personaSchema.find(function(err, persona) {
		if (err) return;

	 	res.send(persona);
	});
});

export = router;