import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API } from '../../api';
import { useDispatch } from 'react-redux';
import { LoginState, setState } from '../../redux/discordAuth';
import { TokenRequestResult } from 'discord-oauth2';

export function OAuth2Page() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ result, setResult ] = useState<TokenRequestResult | null>(null);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const code = searchParams.get('code');

    useEffect(() => {
        if(!code) return nav('/error/400');
        dispatch(setState(LoginState.Processing));
        API.requestAccessToken(code)
            .then((result) => {
                setResult(result);
            })
            .catch((error) => {
                console.log('oauth2.tsx [Error] ->', error);

                localStorage.clear();
                dispatch(setState(LoginState.Idle));

                nav('/error/10001');
            });
    }, []);

    useEffect(() => {
        if(!result) return;
        localStorage.setItem('accessToken', result.access_token);
        localStorage.setItem('refreshToken', result.refresh_token);
        nav('/');
    });

    return <>Loading</>;
}