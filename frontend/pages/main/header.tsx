import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../../css/theme';
import { Button } from '../../utils/button';

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

export function Header() {
    return <Wrapper>
        <StandWithUkraine>#StandWithUkraine</StandWithUkraine>
        <Buttons>
            <Button nav={'/api'}>API Docs</Button>
        </Buttons>
    </Wrapper>
}