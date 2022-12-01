import DiscordOauth2 from 'discord-oauth2';

const oauth2 = new DiscordOauth2({
    clientId: "823521613587808306",
    clientSecret: "VL35kee3y2ScfeUk0sWBVcuflazQcPB4",
    redirectUri: 'http://localhost:2022/oauth2',
});

export class Discord {
    public static async requestToken(code: string): Promise<DiscordOauth2.TokenRequestResult> {
        return await oauth2.tokenRequest({
            code, scope: 'identify',
            grantType: 'authorization_code'
        });
    }

    public static async getUser(token: string): Promise<DiscordOauth2.User> {
        return await oauth2.getUser(token);
    }
}