import React from 'React';
import sc from 'styled-components';
import { ITheme } from '../../../css/theme';

const Button = sc.div`
    position: absolute;
    right: 1em;
    bottom: 1em;
    border-radius: 5px;
    padding: 0.5em 1em;
    justify-content: center;
    align-items: center;
    background-color: ${(props: ITheme) => props.theme.blurple};
    transition: box-shadow 0.2s;
    transition: filter 0.2s;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
        box-shadow: 0px 0px 6px ${(props: ITheme) => props.theme.blurple};
    }
    
    &:active {
        filter: brightness(1.3);
    }
`;

export function SupportButton() {
    return <Button onClick={() => window.open('https://send.monobank.ua/jar/77Q61796WR', '_blank')}>Support Me</Button>
}