import React from 'react';
import { StackItem } from '../stackitem';
import { Images } from '../../images';

const images = Images.getRepository('stack/languages');

export function NodeJS() {
    return <StackItem logo={images["nodejs.png"]} title={"Node.JS"} description={`
        This is most used by me. I always use TypeScript in Node.JS projects.
        I mostly make backend servers with it, but also some projects
        like discord bots are present too.
    `} />;
}

export function TypeScript() {
    return <StackItem logo={images["ts-logo-512.png"]} title={"TypeScript"} description={`
        I love TypeScript, and it is my main programming language. I prefer using
        it everywhere if i can use it. Almost all my projects made with typescript,
        but there is another languages that i use.
    `} />;
}

export function CLang() {
    return <StackItem logo={images["c.svg"]} title={"C# / C++"} description={`
        C# is my secondary language. I use it for making things that should work fast
        or they directly contact with OS. Sometimes i use C++ for making things that
        should work very fast.
    `} />;
}

export function Java() {
    return <StackItem logo={images["java.png"]} title={"Java"} description={`
        Java is the first language i've learned. I use it only in
        Minecraft development (Mods & Plugins). There is only 1 discord
        bot i've made with Java.
    `} />;
}

export function HtmlCss() {
    return <StackItem logo={images["html.png"]} title={"HTML5 / CSS"} description={`
        I am mainly backend developer, but sometimes i can make frontend
        projects w/ HTML5 and CSS. I dont use pure HTML + CSS, and i am using
        some frameworks that are listed below.
    `} />;
}