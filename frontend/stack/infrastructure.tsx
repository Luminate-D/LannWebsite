import React from 'react';
import { _StackItem } from './languages';

export function Windows() {
    return <_StackItem logo={"windows.png"} title={"Windows"} description={`
        My primary Operation System. I use it in my routine, because its more user-friendly
        for me, as i can install linux shell in it. Also i play games on it.
    `} />;
}

export function ArchLinux() {
    return <_StackItem logo={"arch.png"} title={"Arch Linux"} description={`
        My secondary Operation System. Most C++ Projects are made on it.
        I use it in some jobs that windows is not good at. Also
        i do white hacker activity on it.
    `} />;
}

export function Cloudflare() {
    return <_StackItem logo={"cloudflare.png"} title={"Cloudflare"} description={`
        My websites are protected with cloudflare proxy and its the only
        service i use for dns management and etc. purposes.
    `} />;
}

export function Git() {
    return <_StackItem logo={"git.png"} title={"Git SCM"} description={`
        I use Git & GitHub to store all my projects and this is most
        used tool in my coding routine.
    `} />;
}

export function Nginx() {
    return <_StackItem logo={"nginx.webp"} title={"Nginx"} description={`
        I do not use it often. Some big projects are using Nginx if they
        are hosted and need reverse proxy. I dont use other server proxy.
    `} />;
}
