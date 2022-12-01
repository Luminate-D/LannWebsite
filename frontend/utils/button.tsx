import React, { PropsWithChildren } from 'react';
import sc from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { ITheme } from '../css/theme';

const _Button = sc.div`
    display: flex;
    border-radius: 5px;
    padding: 0.5em 1em;
    justify-content: center;
    align-items: center;
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
    logo?: string;
    onClick?: (event: React.MouseEvent) => any;
    className?: string;
}

const ButtonLogo = sc.img`
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
`;

export function Button(props: IButton) {
    const nav = useNavigate();
    return <_Button className={props.className} onClick={(event) => {
        if(props.href) window.open(props.href, '_blank');
        else if(props.nav) nav(props.nav);
        else if(props.onClick) props.onClick(event);
    }}>
        {props.logo ? <ButtonLogo src={props.logo}></ButtonLogo> : ''}
        {props.children}
    </_Button>
}