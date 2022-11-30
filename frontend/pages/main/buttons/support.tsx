import React from 'react';
import sc from 'styled-components';
import { Button } from '../../../utils/button';

const Btn = sc(Button)`
    position: absolute;
    right: 1em;
    bottom: 1em;
`;

export function SupportButton() {
    return <Btn href={'https://send.monobank.ua/jar/77Q61796WR'}>Support Me</Btn>;
}