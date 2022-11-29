import { FastifyInstance, RouteHandlerMethod } from 'fastify';

export interface Route {
    path: string;
    method: 'get' | 'post' | 'put' | 'patch';
    handler: RouteHandlerMethod;
}

export class Router {
    public readonly prefix: string;
    private routes: Route[];

    public constructor(prefix: string) {
        this.prefix = prefix;
        this.routes = [];
    }

    public register(fastify: FastifyInstance) {
        fastify.register((instance, opts, next) => {
            this.routes.forEach(route => {
                instance[route.method](route.path, route.handler);
            });

            next();
        }, { prefix: this.prefix });
    }

    public get(path: string, handler: RouteHandlerMethod) {
        this.routes.push({ path, method: 'get', handler });
    }

    public put(path: string, handler: RouteHandlerMethod) {
        this.routes.push({ path, method: 'put', handler });
    }

    public post(path: string, handler: RouteHandlerMethod) {
        this.routes.push({ path, method: 'post', handler });
    }

    public patch(path: string, handler: RouteHandlerMethod) {
        this.routes.push({ path, method: 'patch', handler });
    }
}