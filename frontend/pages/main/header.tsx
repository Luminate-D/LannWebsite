import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../../css/theme';
import { useNavigate } from 'react-router-dom';

const Wrapper = sc.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 5em;
    display: flex;
    background-color: ${(props: ITheme) => props.theme.bgDark};
`;

const StandWithUkraine = sc.span`
    position: absolute;
    font-size: 1.75em;
    line-height: 1.75em;
    z-index: -1;
    top: calc(50% - 1.75em / 2);
    width: 100%;
    text-align: center;
    height: 1.75em;
    filter: brightness(1.5);
    background: -webkit-linear-gradient(blue, yellow);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
    user-select: none;
    font-family: 'Kanit';
`;

const Buttons = sc.div`
    display: flex;
    width: max-content;
    justify-content: space-between;
    gap: 1em;
    height: 100%;
    padding-left: 1em;
    align-items: center;
`;

const Button = sc.a`
    display: flex;
    font-weight: bold;
    font-size: 1.2em;
    padding: 0.3em 1em;
    border-radius: 0.2em;
    background-color: ${(props: ITheme) => props.theme.bgLight};
    color: ${(props: ITheme) => props.theme.secondary};
    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(1.1);
    }
    
    &:active {
        filter: brightness(1.3);
    }
`;

export function Header() {
    const navigate = useNavigate();

    return <Wrapper>
        <StandWithUkraine>#StandWithUkraine</StandWithUkraine>
        <Buttons>
            <Button onClick={() => navigate('/api')}>API</Button>
        </Buttons>
    </Wrapper>;
}