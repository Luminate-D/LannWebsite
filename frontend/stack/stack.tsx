import React from 'react';
import sc from 'styled-components';
import { NodeJS, CLang, HtmlCss, TypeScript, Java } from './sections/languages';
import { Inversify, MUI, ReactFramework, SASS, StyledComponents, Webpack } from './sections/webframeworks';
import { MariaDB, SQLite, TypeORM } from './sections/databases';
import { ArchLinux, Cloudflare, Git, Nginx, Windows } from './sections/infrastructure';

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
    background: linear-gradient(black, rgba(0, 0, 0, 0));
    z-index: -1;
`;

const Title = sc.span`
    font-size: 3em;
    width: 100%;
    text-align: center;
    margin: 2em 0;
`;

const Stack = sc.div`
    display: flex;
    width: 100%;
    height: max-content;
    position: relative;
    flex-wrap: wrap;
    padding: 0 10em;
    box-sizing: border-box;
    gap: 1em;
    justify-content: center;
    align-items: center;
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
            <Webpack />
            <MUI />
            <StyledComponents />
            <SASS />
            <Inversify />
        </Section>
        <Section title={'Databases'}>
            <MariaDB />
            <SQLite />
            <TypeORM />
        </Section>
        <Section title={'Infrastructure'}>
            <Windows />
            <ArchLinux />
            <Cloudflare />
            <Git />
            <Nginx />
        </Section>
    </Container>;
}