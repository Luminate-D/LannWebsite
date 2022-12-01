import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AccessTokenResponse, API } from '../../api';
import { useDispatch } from 'react-redux';
import { LoginState, setState } from '../../redux/discordAuth';

export function OAuth2Page() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ result, setResult ] = useState<AccessTokenResponse | null>(null);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const code = searchParams.get('code');

    useEffect(() => {
        if(!code) return nav('/error/400');
        dispatch(setState(LoginState.Processing));
        API.requestAccessToken(code)
            .then((result) => {
                setResult(result);
            });
    }, []);

    useEffect(() => {
        if(!result) return;
        localStorage.setItem('accessToken', result.access_token);
        localStorage.setItem('refreshToken', result.refresh_token);
        localStorage.setItem('expiresAt', (Date.now() + result.expires_in).toString());
        nav('/');
    });

    return <>Loading</>;
}