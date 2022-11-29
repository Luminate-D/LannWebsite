import { FastifyInstance } from 'fastify';
import { router } from './routes/status';

export async function register(instance: FastifyInstance) {
    instance.register((instance, opts, next) => {
        router.register(instance);
        next();
    }, { prefix: '/v1' });
}