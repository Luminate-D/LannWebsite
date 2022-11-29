import { Container } from 'inversify';
import { App } from './app';
import { Web } from './services/web';
import { API } from './api/api';

export class Kernel {
    public static Instance = new Kernel();
    private container: Container;

    private constructor() {
        this.container = new Container();
        this.container.bind(App).toSelf().inSingletonScope();
        this.container.bind(Web).toSelf().inSingletonScope();
    }

    public static getService<T>(service: any): T {
        return Kernel.Instance.container.get<T>(service);
    }
}