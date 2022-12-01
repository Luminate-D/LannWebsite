import React, { useEffect } from 'react';
import sc from 'styled-components';
import { Button } from '../utils/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { LoginState, setState, setUser } from '../redux/discordAuth';
import { API } from '../api';
import { LoggedUserInfo } from './loggeduserinfo';

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
                dispatch(setUser(user));
                dispatch(setState(LoginState.Success));
            });
    }, []);

    const toRender =
        state == LoginState.Idle ? <LoginButton /> :
        state == LoginState.Processing ? 'Logging In...' :
            <LoggedUserInfo />;

    return <_LoginButtonWrapper>{toRender}</_LoginButtonWrapper>
}

export function LoginButton() {
    return <Button
        logo={'images/services/discord.png'}
        href={'https://discord.com/api/oauth2/authorize?client_id=823521613587808306&redirect_uri=http%3A%2F%2Flocalhost%3A2022%2Foauth2&response_type=code&scope=identify'}>
        Login
    </Button>
}