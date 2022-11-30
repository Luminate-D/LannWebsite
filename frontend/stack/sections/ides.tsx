import React from 'react';
import sc from 'styled-components';
import { Images } from '../../images';

const Wrapper = sc.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const IDEItem = sc.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const IDELogo = sc.img`
    width: 2.5em;
    height: 2.5em;
    margin-right: 1em;
`;

const IDEName = sc.span`
    font-size: 2em;
    font-weight: bold;
    font-family: 'Roboto';
`;

const images = Images.getRepository('stack/ides');

export function IDEsList() {
    return <Wrapper>
        <IDEItem>
            <IDELogo src={images['jetbrains.png']}></IDELogo>
            <IDEName>JetBrains IDEs</IDEName>
        </IDEItem>
        <IDEItem>
            <IDELogo src={images['vscode.png']}></IDELogo>
            <IDEName>Visual Studio Code</IDEName>
        </IDEItem>
        <IDEItem>
            <IDELogo src={images['npp.png']}></IDELogo>
            <IDEName>Notepad++</IDEName>
        </IDEItem>
    </Wrapper>
}