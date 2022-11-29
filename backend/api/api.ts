import { FastifyInstance } from 'fastify';
import { register } from './v1/main';

const API_KEYS = [
    'd3ced9d7f86028e78a4d8d18bf77dfb595911c61', // Lann
    '101ffff5c7294a52470da17ae238c254d6e2c67a',
    '4d58d9288ce1faa26909f9c6f4bbffec3809dcbc',
    'c73ed6b13a5a2ef68bc6196c8eb0b7f48c7e5c9e',
    '8f3275ee2c08568a255c5184acbf5673cbff6ae0'
];

export class API {
    private _fastify: FastifyInstance;
    public constructor(fastify: FastifyInstance) {
        this._fastify = fastify;
        this.register(fastify);
    }

    private register(fastify: FastifyInstance) {
        fastify.register((instance, opts, next) => {
            instance.addHook('preHandler', (req, res, next) => {
                const key = req.headers['authorization'];
                //if(!key) return res.status(401).send({ message: 'Missing Authorization header' });
                //if(!API_KEYS.includes(key)) return res.status(403).send({ message: 'Authorization Key is Wrong' });

                next();
            });

            register(instance);

            next();
        }, { prefix: '/api' });
    }
}