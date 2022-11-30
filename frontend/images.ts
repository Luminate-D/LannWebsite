export class Images {
    public static getRepository(path: string): Record<string, string> {
        return new Proxy({}, {
            get(target, key) {
                return 'images/' + path + '/' + key.toString();
            }
        });
    }
}