import { injectable } from 'inversify';
import Fastify, { FastifyInstance } from 'fastify';
import { LoggerFactory } from '../logger/logger';
import { Constants } from '../constants';
import fstatic from '@fastify/static';
import Bluebird from 'bluebird';
import * as path from 'path';
import { API } from '../api/api';

@injectable()
export class Web {
    private readonly logger = LoggerFactory.createLogger('WebService');
    private readonly _fastify: FastifyInstance;

    public constructor() {
        this._fastify = Fastify();
        this._fastify.setNotFoundHandler((req, res) => {
            res.redirect('/');
        });
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