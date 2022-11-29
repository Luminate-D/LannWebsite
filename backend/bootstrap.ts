import 'reflect-metadata';
import { Kernel } from './kernel';
import { App } from './app';

(async () => {
    const app = Kernel.getService<App>(App);
    await app.start();
})();