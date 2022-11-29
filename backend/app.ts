import { injectable } from 'inversify';
import { LoggerFactory } from './logger/logger';
import { Kernel } from './kernel';
import { Web } from './services/web';

@injectable()
export class App {
    private readonly logger = LoggerFactory.createLogger('App');
    private _web: Web;

    public constructor() {
        this.logger.fatal('Ohayou, baka!');
        this._web = Kernel.getService<Web>(Web);
    }

    public async start() {
        await this._web.start();
    }
}