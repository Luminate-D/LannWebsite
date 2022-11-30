import React from 'react';
import sc from 'styled-components';
import { Button } from '../utils/button';
import { ITheme } from '../css/theme';

const Wrapper = sc.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto';
`;

const Title = sc.span`
    font-size: 3em;
    line-height: 1em;
`;

const SubTitle = sc.span`
    font-size: 2em;
    margin-bottom: 1em;
`;

const ErrorCode = sc.span`
    font-size: 4em;
    font-family: 'Impact';
    color: ${(props: ITheme) => props.theme.red};
`;

export function PageNotFound() {
    return <Wrapper>
        <ErrorCode>404</ErrorCode>
        <Title>Looks like you are lost 😰</Title>
        <SubTitle>Could not find requested page, maybe there is a mistake?</SubTitle>
        <Button nav={'/'}>Take Me Home</Button>
    </Wrapper>;
}