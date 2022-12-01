import React from 'react';
import sc from 'styled-components';

const _StackItem = sc.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - 1em);
    margin-bottom: 2em;
`;

const Head = sc.div`
    display: flex;
    flex-diretion: row;
`;

const Logo = sc.img`
    width: 2.5em;
    height: auto;
    margin-right: 1em;
    max-height: 2.5em;
`;

const Title = sc.span`
    font-size: 2em;
    font-weight: bold;
    font-family: 'Roboto';
`;

const Description = sc.span`
    padding-left: 3.5em;
    width: 100%;
    box-sizing: border-box;
    word-break: break-all;
`;

export interface IStackItem {
    logo: string;
    title: string;
    description: string;
    logoFilter?: string;
}

export function StackItem(props: IStackItem) {
    return <_StackItem>
        <Head>
            <Logo src={props.logo} style={{
                filter: props.logoFilter
            }} />
            <Title>{props.title}</Title>
        </Head>
        <Description>{props.description}</Description>
    </_StackItem>;
}