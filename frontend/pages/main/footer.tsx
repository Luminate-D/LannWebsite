import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../../css/theme';
import { useNavigate } from 'react-router-dom';

const Container = sc.div`
    display: flex;
    width: 100%;
    height: 10em;
    margin-top: 2em;
    background-color: ${(props: ITheme) => props.theme.bgDark};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.2em;
    padding: 1em 3em;
    box-sizing: border-box;
`;

const _Info = sc.div`
    display: flex;
    align-items: center;
    height: min-content;
    
    &:hover {
        cursor: pointer;
    }
`;

const InfoTitle = sc.div`
    margin-right: 0.5em;
`;

const Highlighted = sc.div`
    background-color: ${(props: ITheme) => props.theme.bgLight};
    padding: 3px 5px;
    border-radius: 3px;
`;

interface IInfo { title: string; href?: string; navigate?: string; children?: React.ReactNode; }
function Info(props: IInfo) {
    const nav = useNavigate();
    return <_Info onClick={() => {
        if(props.href) window.open(props.href, '_blank');
        else nav(props.navigate!);
    }}>
        <InfoTitle>{props.title}</InfoTitle>
        <Highlighted>{props.children}</Highlighted>
    </_Info>
}

export function Footer() {
    return <Container>
        <Info title={'Ethereum Address'} href={'https://etherscan.io/address/0x3Cdeb2De30dCb1890F199981F94fDc65f8752a85'}>0x3Cdeb2De30dCb1890F199981F94fDc65f8752a85</Info>
        <Info title={'RSA Public Key'} href={'/cdn/pubkey.rsa'}>Click to Download</Info>
        <Info title={'GPG Public Key'} navigate={'/pgp'}>Click to View</Info>
    </Container>
}