import React, { PropsWithChildren } from 'react';
import sc from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { ITheme } from '../css/theme';

const _Button = sc.div`
    display: flex;
    border-radius: 5px;
    padding: 0.5em 1em;
    background-color: ${(props: ITheme) => props.theme.blurple};
    transition: box-shadow 0.1s;
    transition: filter 0.1s;
    user-select: none;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
        box-shadow: 0px 0px 3px ${(props: ITheme) => props.theme.blurple};
    }
    
    &:active {
        filter: brightness(1.3);
    }
`;

export interface IButton extends PropsWithChildren {
    href?: string;
    nav?: string;
    className?: string;
}

export function Button(props: IButton) {
    const nav = useNavigate();
    return <_Button className={props.className} onClick={() => {
        if(props.href) window.open(props.href, '_blank');
        else nav(props.nav!);
    }}>
        {props.children}
    </_Button>
}