import React from 'react';
import sc from 'styled-components';
import { Button } from '../utils/button';

const Wrapper = sc.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = sc.span`
    font-size: 3em;
`;

const SubTitle = sc.span`
    font-size: 2em;
`;

export function ApiPage() {
    return <Wrapper>
        <Title>API is under development.</Title>
        <SubTitle>When its ready, you will need to get an API key to use it.</SubTitle>
        <Button nav={'/api'}>Request API Key</Button>
    </Wrapper>;
}