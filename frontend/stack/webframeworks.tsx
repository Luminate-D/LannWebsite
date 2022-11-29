import React from 'react';
import { _StackItem } from './languages';

export function ReactFramework() {
    return <_StackItem logo={"react.png"} title={"React"} description={`
        I really love this framework and use it in frontend development.
        I have much experience in this framework and used it in my big projects
    `} />;
}

export function Webpack() {
    return <_StackItem logo={"webpack.webp"} title={"Webpack"} description={`
        This is my favorite code bundler so i use it in production projects
        to bundle React apps and sometimes use it for backend. Also i use
        it in libraries made by me.
    `} />;
}

export function MUI() {
    return <_StackItem logo={"mui.webp"} title={"MUI"} description={`
        I dont use it often, and prefer using it only when i dont need
        custom CSS or worked out design. I dont have much experience with it.
    `} />;
}

export function StyledComponents() {
    return <_StackItem logo={"sc.png"} title={"Styled Components"} description={`
        I dont use it often, and prefer using it only when i dont need
        custom CSS or worked out design. I dont have much experience with it.
    `} />;
}

export function SASS() {
    return <_StackItem logo={"sass.png"} title={"SASS"} description={`
        Since i started using styled components i almost stopped using SASS,
        but sometimes i can use them both in big projects. I dont have much
        experience.
    `} />;
}

export function Inversify() {
    return <_StackItem logo={"inversify.svg"} logoFilter={"invert(52%) sepia(33%) saturate(3681%) hue-rotate(159deg) brightness(91%) contrast(104%)"}
                       title={"InversifyJS"} description={`
        My favorite and the only one library i use for Inversion of Control
        in my code. I use it in every project made with TypeScript.
    `} />;
}