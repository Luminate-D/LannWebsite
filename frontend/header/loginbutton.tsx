import React, { useEffect } from 'react';
import sc from 'styled-components';
import { Button } from '../utils/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { LoginState, setState, setUser } from '../redux/discordAuth';
import { API } from '../api';
import { LoggedUserInfo } from './loggeduserinfo';
import { Images } from '../images';

const _LoginButtonWrapper = sc.div`
    margin-left: auto;
    display: flex;
    width: max-content;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

export function LoginButtonWrapper() {
    const state = useSelector((state: RootState) => state.discordAuth.state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(state != LoginState.Update) return;

        if(localStorage.getItem('accessToken') == null) {
            dispatch(setState(LoginState.Idle));
            return;
        }

        const tokens = {
            access_token: localStorage.getItem('accessToken')!,
            refresh_token: localStorage.getItem('refreshToken')!
        };

        API.getUser(tokens)
            .then((user) => {
                if(user.tokensChanged) {
                    localStorage.setItem('accessToken', user.tokens!.access_token);
                    localStorage.setItem('refreshToken', user.tokens!.refresh_token);
                }

                dispatch(setUser(user.user));
                dispatch(setState(LoginState.Success));
            }).catch((error) => {
                console.log('LoginButton.tsx [Error] ->', error);

                localStorage.clear();
                dispatch(setState(LoginState.Idle));
            });
    });

    const toRender =
        state == LoginState.Idle ? <LoginButton /> :
        state == LoginState.Processing ? 'Logging In...' :
        state == LoginState.Update ? 'Updating...' :
            <LoggedUserInfo />;

    return <_LoginButtonWrapper>{toRender}</_LoginButtonWrapper>
}

const images = Images.getRepository('services');
export function LoginButton() {
    return <Button
        logo={images['discord.png']}
        href={'https://discord.com/api/oauth2/authorize?client_id=823521613587808306&redirect_uri=http%3A%2F%2Flocalhost%3A2022%2Foauth2&response_type=code&scope=identify'}>
        Login
    </Button>
}