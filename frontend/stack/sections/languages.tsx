import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../../css/theme';

export const StackItem = sc.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - 1em);
    margin-bottom: 2em;
`;

export const Head = sc.div`
    display: flex;
    flex-diretion: row;
`;

export const Logo = sc.img`
    width: 2.5em;
    height: 2.5em;
    margin-right: 1em;
`;

export const Title = sc.span`
    font-size: 2em;
    font-weight: bold;
    font-family: 'Roboto';
`;

export const Description = sc.span`
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

export function _StackItem(props: IStackItem) {
    return <StackItem>
        <Head>
            <Logo src={'/images/' + props.logo} style={{
                filter: props.logoFilter
            }} />
            <Title>{props.title}</Title>
        </Head>
        <Description>{props.description}</Description>
    </StackItem>;
}

export function NodeJS() {
    return <_StackItem logo={"nodejs.png"} title={"Node.JS"} description={`
        This is most used by me. I always use TypeScript in Node.JS projects.
        I mostly make backend servers with it, but also some projects
        like discord bots are present too.
    `} />;
}

export function TypeScript() {
    return <_StackItem logo={"ts-logo-512.png"} title={"TypeScript"} description={`
        I love TypeScript, and it is my main programming language. I prefer using
        it everywhere if i can use it. Almost all my projects made with typescript,
        but there is another languages that i use.
    `} />;
}

export function CLang() {
    return <_StackItem logo={"c.svg"} title={"C# / C++"} description={`
        C# is my secondary language. I use it for making things that should work fast
        or they directly contact with OS. Sometimes i use C++ for making things that
        should work very fast.
    `} />;
}

export function Java() {
    return <_StackItem logo={"java.png"} title={"Java"} description={`
        Java is the first language i've learned. I use it only in
        Minecraft development (Mods & Plugins). There is only 1 discord
        bot i've made with Java.
    `} />;
}

export function HtmlCss() {
    return <_StackItem logo={"html.png"} title={"HTML5 / CSS"} description={`
        I am mainly backend developer, but sometimes i can make frontend
        projects w/ HTML5 and CSS. I dont use pure HTML + CSS, and i am using
        some frameworks that are listed below.
    `} />;
}