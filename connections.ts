import * as mongoose from 'mongoose';
import * as configPrivate from './config.private';

function schemaDefaults(schema){
    schema.set('toJson', {
        virtuals: true,
        versionKey: false
    });
}

export class Connections {
    static main: mongoose.Connections;

    static initialize() {
        (mongoose as any).Promise = global.Promise;
        mongoose.plugin(schemaDefaults);

        mongoose.connect(configPrivate.hosts.mongoDb_main.host, configPrivate.hosts.mongoDb_main.options);
        this.main = mongoose.connections;
    }
}