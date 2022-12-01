import React from 'react';
import sc from 'styled-components';
import { Button } from '../../utils/button';
import { SubTitle, Title } from '../../utils/text/title';

const Wrapper = sc.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledButton = sc(Button)`
    margin-top: 1em;
`;

export function ApiPage() {
    return <Wrapper>
        <Title>API is under development.</Title>
        <SubTitle>When its ready, you will need to get an API key to use it.</SubTitle>
        <StyledButton nav={'/api/request'}>Request API Key</StyledButton>
    </Wrapper>
}