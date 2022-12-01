import React from 'react';
import { StackItem } from '../stackitem';
import { Images } from '../../images';

const images = Images.getRepository('stack/frameworks');

export function ReactFramework() {
    return <StackItem logo={images["react.png"]} title={"React"} description={`
        I really love this framework and use it in frontend development.
        I have much experience in this framework and used it in my big projects
    `} />;
}

export function ReduxFramework() {
    return <StackItem logo={images["redux.png"]} title={"Redux & Redux Toolkit"} description={`
        I use it for state management in my React projects. I mostly use it
        in big projects or somewhere when i really need it (like this website).
    `} />;
}

export function Webpack() {
    return <StackItem logo={images["webpack.webp"]} title={"Webpack"} description={`
        This is my favorite code bundler so i use it in production projects
        to bundle React apps and sometimes use it for backend. Also i use
        it in libraries made by me.
    `} />;
}

export function MUI() {
    return <StackItem logo={images["mui.webp"]} title={"MUI"} description={`
        I dont use it often, and prefer using it only when i dont need
        custom CSS or worked out design. I dont have much experience with it.
    `} />;
}

export function StyledComponents() {
    return <StackItem logo={images["sc.png"]} title={"Styled Components"} description={`
        I dont use it often, and prefer using it only when i dont need
        custom CSS or worked out design. I dont have much experience with it.
    `} />;
}

export function SASS() {
    return <StackItem logo={images["sass.png"]} title={"SASS"} description={`
        Since i started using styled components i almost stopped using SASS,
        but sometimes i can use them both in big projects. I dont have much
        experience.
    `} />;
}

export function Inversify() {
    return <StackItem logo={images["inversify.svg"]} logoFilter={"invert(52%) sepia(33%) saturate(3681%) hue-rotate(159deg) brightness(91%) contrast(104%)"}
                      title={"InversifyJS"} description={`
        My favorite and the only one library i use for Inversion of Control
        in my code. I use it in every project made with TypeScript.
    `} />;
}