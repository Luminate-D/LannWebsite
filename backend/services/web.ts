import { injectable } from 'inversify';
import Fastify, { FastifyInstance } from 'fastify';
import { LoggerFactory } from '../logger/logger';
import { Constants } from '../constants';
import fstatic from '@fastify/static';
import Bluebird from 'bluebird';
import * as path from 'path';
import { Kernel } from '../kernel';
import { API } from '../api/api';

@injectable()
export class Web {
    private readonly logger = LoggerFactory.createLogger('WebService');
    private _fastify: FastifyInstance;

    public constructor() {
        this._fastify = Fastify();
    }

    private initMiddleware() {
        this._fastify.register((instance, opts, next) => {
            instance.register(fstatic, {
                root: path.resolve(__dirname, '../../frontend'),
                prefix: '/static'
            });

            next();
        });

        this._fastify.register((instance, opts, next) => {
            instance.register(fstatic, {
                root: path.resolve(__dirname, '../../../static'),
                prefix: '/'
            });

            next();
        });

        this._fastify.get('/api', (req, res) => {
            res.send({
                message: `API is under development. You need an API key to access API. To get API key, please, contact me from 'Contacts' section on the main website.`
            });
        });
    }

    public start(): Bluebird<void> {
        this.initMiddleware();

        new API(this._fastify);

        return new Bluebird((resolve, reject) => {
            this._fastify.listen({
                host: '0.0.0.0',
                port: Constants.WEB_PORT
            }, (err) => {
                if(err) return reject(err);
                this.logger.info('Listening on 0.0.0.0:{0}', Constants.WEB_PORT);
                resolve();
            });
        });
    }
}