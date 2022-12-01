import { FastifyInstance, FastifyRequest } from 'fastify';
import { register } from './v1/main';
import { Discord } from './discord';

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
        fastify.register(async (instance, opts, next) => {
            instance.addHook('preHandler', (req, res, next) => {
                const key = req.headers['authorization'];
                //if(!key) return res.status(401).send({ message: 'Missing Authorization header' });
                //if(!API_KEYS.includes(key)) return res.status(403).send({ message: 'Authorization Key is Wrong' });

                next();
            });

            instance.get('/oauth2/:code', async (req: FastifyRequest<{
                Params: { code: string }
            }>, res) => {
                const code = req.params['code'];
                const result = await Discord.requestToken(code);
                res.send(result);
            });

            instance.post('/user', async (req: FastifyRequest<{
                Body: { access_token: string; refresh_token: string; }
            }>, res) => {
                const user = await Discord.getUser(req.body.access_token);
                res.send(user);
            });

            await register(instance);

            next();
        }, { prefix: '/api' });
    }
}