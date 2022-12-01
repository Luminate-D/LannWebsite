import { TokenRequestResult, User } from 'discord-oauth2';

export interface APIResponse<T> {
    error?: Error;
    success: boolean;
    data: T;
}

export interface UserResponse {
    user: User;
    tokensChanged: boolean;
    tokens?: TokenRequestResult;
}

export class API {
    public static async requestAccessToken(code: string): Promise<TokenRequestResult> {
        const response = await fetch('/api/oauth2/' + code, {
            method: 'GET'
        });

        const json = await response.json();
        if(!json.success) throw new Error(json.error);

        return json.data as TokenRequestResult;
    }

    public static async getUser(tokens: { access_token: string; refresh_token: string; }): Promise<UserResponse> {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tokens)
        });

        const json = await response.json();
        if(!json.success) throw new Error(json.error);

        return json.data as UserResponse;
    }
}