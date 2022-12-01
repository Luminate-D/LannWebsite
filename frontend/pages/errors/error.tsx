import React from 'react';
import sc from 'styled-components';
import { useParams } from 'react-router-dom';
import { LocalErrors } from './localerrors';
import { ITheme } from '../../css/theme';
import { Button } from '../../utils/button';

const Wrapper = sc.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ErrorIdWrapper = sc.div`
    display: flex;
    flex-direction: column;
`;

const ErrorName = sc.span`
    font-size: 2.5em;
    line-height: 1em;
    margin-bottom: 0.5em;
    color: ${(props: ITheme) => props.theme.red};
`;

const ErrorId = sc.span`
    width: 100%;
    line-height: 0.5em;
    justify-content: center;
    display: flex;
    color: ${(props: ITheme) => props.theme.red};
`;

const ErrorMessage = sc.span`
    font-size: 1.5em;
    margin-bottom: 0.5em;
`;

export function ErrorPage() {
    const { errorId } = useParams();
    const error = LocalErrors.getErrorById(parseInt(errorId!))!;

    return <Wrapper>
        <ErrorIdWrapper>
            <ErrorId>{error.id}</ErrorId>
            <ErrorName>{error.codeName}</ErrorName>
        </ErrorIdWrapper>
        <ErrorMessage>{error.message}</ErrorMessage>
        <Button nav={'/'}>Take Me Home</Button>
    </Wrapper>
}