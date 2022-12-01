class LocalError {
    public readonly id: number;
    public readonly codeName: string;
    public readonly message: string;

    public constructor(id: number, codeName: string, message: string) {
        this.id = id;
        this.codeName = codeName;
        this.message = message;
    }
}

const Localerrors: Record<number, LocalError> = {
    10001: new LocalError(10001, 'OAUTH2_FAILED', 'Failed to authorize with Discord, try again later.'),
};

export class LocalErrors {
    public static getErrorById(id: number): LocalError | null {
        return Localerrors[id] ?? null;
    }

    public static getErrorByCode(codeName: string): LocalError | null {
        return Object.values(Localerrors).find(x => x.codeName == codeName) ?? null;
    }
}