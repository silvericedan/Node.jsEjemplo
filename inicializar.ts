import * as bodyparser from 'body-parser';
import * as config from './config';
import * as configPrivate from './config.private';
import { Connections } from './connections';
import * as express from 'express';

const requireDir = require('require-dir');

export function initApi(app: express){
    Connections.initialize();

    app.use(bodyparser.json({ limit: '50mb'}));

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