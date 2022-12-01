import React from 'react';
import sc from 'styled-components';
import { Title } from '../../utils/text/title';
import { Button } from '../../utils/button';

const Wrapper = sc.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledButton = sc(Button)`margin-top: 1em`;

export function RequestApiKeyPage() {
    return <Wrapper>
        <Title>Please, contact me to get API key.</Title>
        <StyledButton nav={'/'}>Take Me Home</StyledButton>
    </Wrapper>;
}