import React from 'react';
import sc from 'styled-components';
import { NodeJS, CLang, HtmlCss, TypeScript, Java } from './sections/languages';
import {
    Inversify,
    MUI,
    ReactFramework,
    ReduxFramework,
    SASS,
    StyledComponents,
    Webpack
} from './sections/webframeworks';
import { MariaDB, SQLite, TypeORM } from './sections/databases';
import { ArchLinux, Cloudflare, Git, Nginx, Windows } from './sections/infrastructure';
import { IDEsList } from './sections/ides';
import { ITheme } from '../css/theme';

const Container = sc.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: max-content;
`;

const Gradient = sc.div`
    position: absolute;
    width: 100%;
    height: 15em;
    background: linear-gradient(${(props: ITheme) => props.theme.bgBlack}, rgba(0, 0, 0, 0));
    z-index: -1;
`;

const Title = sc.span`
    font-size: 3em;
    width: 100%;
    text-align: center;
    margin: 1em 0;
`;

const Stack = sc.div`
    display: flex;
    width: 100%;
    height: max-content;
    position: relative;
    flex-wrap: wrap;
    padding: 0 10vw;
    box-sizing: border-box;
    gap: 1em;
    justify-content: center;
    align-items: baseline;
`;

interface ISection { title: string; children?: React.ReactNode };
function Section(props: ISection) {
    return <Container>
        <Title>{props.title}</Title>
        <Stack>{props.children}</Stack>
    </Container>
}

export function TechnologyStack() {
    return <Container id={"stack"}>
        <Gradient />
        <Section title={'Languages & Technologies'}>
            <NodeJS />
            <TypeScript />
            <CLang />
            <Java />
            <HtmlCss />
        </Section>
        <Section title={'Frameworks & Libraries'}>
            <ReactFramework />
            <ReduxFramework />
            <Webpack />
            <MUI />
            <StyledComponents />
            <SASS />
            <Inversify />
        </Section>
        <Section title={'Infrastructure'}>
            <Windows />
            <ArchLinux />
            <Cloudflare />
            <Git />
            <Nginx />
        </Section>
        <Section title={'IDEs & Code Editors'}>
            <IDEsList />
        </Section>
        <Section title={'Databases'}>
            <MariaDB />
            <SQLite />
            <TypeORM />
        </Section>
    </Container>;
}