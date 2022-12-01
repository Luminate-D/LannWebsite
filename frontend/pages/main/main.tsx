import { Welcome } from './welcome';
import { TechnologyStack } from '../../stack/stack';
import { ContactsList } from './contacts';
import { Footer } from './footer';
import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../../css/theme';
import { Header } from './header';

const ContentContainer = sc.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: max-content;
`;

const Divider = sc.span`
    width: 60%;
    height: 2px;
    background-color: ${(props: ITheme) => props.theme.secondary};
    margin: 2em 0;
`;

export function MainPage() {
    return <>
        <Welcome />
        <ContentContainer>
            <TechnologyStack />
            <Divider />
            <ContactsList />
            <Footer />
        </ContentContainer>
    </>;
}