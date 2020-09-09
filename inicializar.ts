import * as bodyparser from 'body-parser';
import * as config from './config';
import * as configPrivate from './config.private';
import { Connections } from './connections';
import * as express from 'express';

const requireDir = require('require-dir');

export function initApi(app: express){
    Connections.initialize();

    app.use(bodyparser.json({ limit: '50mb'}));

    app.all('*', (req, res, next) => {
		// res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
		// res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');

		// Permitir que el método OPTIONS funcione sin autenticación
		if ('OPTIONS' === req.method) {
			res.header('Access-Control-Max-Age', '1728000');
			res.sendStatus(200);
		} else {
			next();
		}
	});

    for(const m in config.modules) {
        if (config.modules[m].active) {
            const routes = requireDir(config.modules[m].path);
            for (const route in routes) {
                if (config.modules[m].middleware) {
                    app.use('/api' + config.modules[m].route, config.modules[m].middleware, routes[route]);
                }   else {
                        app.use('/api' + config.modules[m].route, routes[route]);
                }
            }
        }
    }
}