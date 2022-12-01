import * as stream from 'stream';

export interface AccessTokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export interface IUser {
    username: string;
}

export class API {
    public static async requestAccessToken(code: string): Promise<AccessTokenResponse> {
        const response = await fetch('/api/oauth2/' + code, {
            method: 'GET'
        });

        return await response.json() as AccessTokenResponse;
    }

    public static async getUser(tokens: { access_token: string; refresh_token: string; }): Promise<IUser> {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tokens)
        });

        return await response.json() as IUser;
    }
}